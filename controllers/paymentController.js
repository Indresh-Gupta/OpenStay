const Razorpay = require("razorpay");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

const Payment = require("../models/Payment.js");
const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");
const generateInvoice = require("../utils/generateInvoice.js");

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports.createOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { checkIn, checkOut, Adult, child, guest, roomType, listing, author } = req.body;

        if (!checkIn || !checkOut || !Adult || !child || !guest || !roomType || !listing || !author) {
            req.flash("error", "All fields are required.");
            return res.redirect(`/listings/${id}/book`);
        }

        const listingDoc = await Listing.findById(listing);
        if (!listingDoc) {
            req.flash("error", "Listing not found.");
            return res.redirect("/listings");
        }

        const amountInRupees = Number(listingDoc.price);
        const amountInPaise = Math.round(amountInRupees * 100);

        const options = {
            amount: amountInPaise,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpayInstance.orders.create(options);

        const newPayment = new Payment({
            user: req.user._id,
            listing: listingDoc._id,
            orderId: order.id,
            amount: amountInPaise,
            currency: order.currency,
            status: "created",
            receipt: options.receipt,
        });

        await newPayment.save();

        res.render("payment/checkout.ejs", {
            order,
            key_id: process.env.RAZORPAY_KEY_ID,
            listing: listingDoc,
            checkIn,
            checkOut,
            Adult,
            child,
            guest,
            roomType,
            author,
            paymentDbId: newPayment._id,
            currUser: req.user,
        });
    } catch (err) {
        console.log("Error in createOrder:", err);
        req.flash("error", "Something went wrong while creating the payment order.");
        res.redirect("/listings");
    }
};

module.exports.verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            paymentDbId,
            listing,
            checkIn,
            checkOut,
            Adult,
            child,
            guest,
            roomType,
            author,
        } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ success: false, message: "Invalid payment response." });
        }

        const generatedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        const paymentRecord = await Payment.findById(paymentDbId);

        if (!paymentRecord) {
            return res.status(404).json({ success: false, message: "Order record not found." });
        }

        // ---- Only this block decides genuine payment failure ----
        if (generatedSignature !== razorpay_signature) {
            paymentRecord.status = "failed";
            await paymentRecord.save();
            return res.status(400).json({
                success: false,
                message: "Invalid signature. Payment verification failed.",
                redirectUrl: "/payment/failure",
            });
        }

        paymentRecord.paymentId = razorpay_payment_id;
        paymentRecord.signature = razorpay_signature;
        paymentRecord.status = "paid";
        await paymentRecord.save();
        // ---- Payment is confirmed from here on. Nothing below can send the user to /payment/failure. ----

        try {
            const listingDoc = await Listing.findById(listing);
            if (!listingDoc) {
                throw new Error("Listing not found while creating booking.");
            }

            const newBooking = new Booking({
                checkIn: checkIn,
                checkOut: checkOut,
                Adult: Number(Adult),
                Child: Number(child),
                Guest: Number(guest),
                roomType: roomType,
                listing: listingDoc._id,
                author: author,
                user: req.user._id,
                payment: paymentRecord._id,
                paymentStatus: "paid",
            });

            await newBooking.save();

            paymentRecord.booking = newBooking._id;
            await paymentRecord.save();

            try {
                const invoiceDir = path.join(__dirname, "..", "public", "invoices");
                if (!fs.existsSync(invoiceDir)) {
                    fs.mkdirSync(invoiceDir, { recursive: true });
                }

                const invoiceFileName = `invoice_${paymentRecord._id}.pdf`;
                const invoiceFullPath = path.join(invoiceDir, invoiceFileName);

                await generateInvoice({
                    invoiceNumber: paymentRecord.receipt,
                    bookingId: newBooking._id,
                    paymentId: paymentRecord.paymentId,
                    hotelName: listingDoc.title,
                    customerName: req.user.username,
                    checkIn: new Date(checkIn).toLocaleDateString("en-IN"),
                    checkOut: new Date(checkOut).toLocaleDateString("en-IN"),
                    roomType,
                    adults: Adult,
                    children: child,
                    amount: paymentRecord.amount / 100,
                    status: paymentRecord.status,
                    date: new Date(),
                    filePath: invoiceFullPath,
                });

                paymentRecord.invoicePath = `/invoices/${invoiceFileName}`;
                await paymentRecord.save();
            } catch (invoiceErr) {
                console.log("Invoice generation failed (payment + booking still succeeded):", invoiceErr);
                // Don't fail the request — invoice can be regenerated on download.
            }
        } catch (bookingErr) {
            console.log("Booking creation failed (payment still succeeded):", bookingErr);
            // Payment was genuinely captured — never send this case to /payment/failure.
            return res.status(200).json({
                success: true,
                message: "Payment received, but booking could not be finalized. Please contact support with your payment ID.",
                redirectUrl: `/payment/success?paymentId=${paymentRecord._id}`,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Payment verified successfully.",
            redirectUrl: `/payment/success?paymentId=${paymentRecord._id}`,
        });
    } catch (err) {
        console.log("Error in verifyPayment:", err);
        return res.status(500).json({
            success: false,
            message: "Server error during payment verification.",
            redirectUrl: "/payment/failure",
        });
    }
};

module.exports.paymentSuccess = async (req, res) => {
    try {
        const { paymentId } = req.query;
        const paymentRecord = await Payment.findById(paymentId)
            .populate("listing")
            .populate("booking")
            .populate("user");

        if (!paymentRecord) {
            req.flash("error", "Payment record not found.");
            return res.redirect("/listings");
        }

        res.render("payment/success.ejs", { paymentRecord });
    } catch (err) {
        console.log("Error in paymentSuccess:", err);
        req.flash("error", "Unable to load payment success page.");
        res.redirect("/listings");
    }
};

module.exports.paymentFailure = async (req, res) => {
    try {
        res.render("payment/failure.ejs");
    } catch (err) {
        console.log("Error in paymentFailure:", err);
        req.flash("error", "Unable to load payment failure page.");
        res.redirect("/listings");
    }
};

module.exports.downloadInvoice = async (req, res) => {
    try {
        const { id } = req.params;

        const paymentRecord = await Payment.findById(id)
            .populate("listing")
            .populate("booking")
            .populate("user");

        if (!paymentRecord) {
            req.flash("error", "Payment record not found.");
            return res.redirect("/payment/history");
        }

        let filePath = paymentRecord.invoicePath
            ? path.join(__dirname, "..", "public", paymentRecord.invoicePath)
            : null;

        // Regenerate on the fly if missing (e.g. earlier generation failed) and we have enough data to rebuild it
        if ((!filePath || !fs.existsSync(filePath)) && paymentRecord.booking && paymentRecord.listing) {
            const invoiceDir = path.join(__dirname, "..", "public", "invoices");
            if (!fs.existsSync(invoiceDir)) {
                fs.mkdirSync(invoiceDir, { recursive: true });
            }

            const invoiceFileName = `invoice_${paymentRecord._id}.pdf`;
            const invoiceFullPath = path.join(invoiceDir, invoiceFileName);

            await generateInvoice({
                invoiceNumber: paymentRecord.receipt,
                bookingId: paymentRecord.booking._id,
                paymentId: paymentRecord.paymentId,
                hotelName: paymentRecord.listing.title,
                customerName: paymentRecord.user.username,
                checkIn: new Date(paymentRecord.booking.checkIn).toLocaleDateString("en-IN"),
                checkOut: new Date(paymentRecord.booking.checkOut).toLocaleDateString("en-IN"),
                roomType: paymentRecord.booking.roomType,
                adults: paymentRecord.booking.Adult,
                children: paymentRecord.booking.Child,
                amount: paymentRecord.amount / 100,
                status: paymentRecord.status,
                date: paymentRecord.createdAt,
                filePath: invoiceFullPath,
            });

            paymentRecord.invoicePath = `/invoices/${invoiceFileName}`;
            await paymentRecord.save();
            filePath = invoiceFullPath;
        }

        if (!filePath || !fs.existsSync(filePath)) {
            req.flash("error", "Invoice could not be generated — booking details are incomplete for this payment.");
            return res.redirect("/payment/history");
        }

        res.download(filePath, `invoice_${paymentRecord.receipt}.pdf`, (err) => {
            if (err) {
                console.log("Error in downloadInvoice download:", err);
            }
        });
    } catch (err) {
        console.log("Error in downloadInvoice:", err);
        req.flash("error", "Something went wrong while downloading invoice.");
        res.redirect("/payment/history");
    }
};

module.exports.paymentHistory = async (req, res) => {
    try {
        const payments = await Payment.find({ user: req.user._id, status: "paid" })
            .populate("listing")
            .populate("booking")
            .sort({ createdAt: -1 });

        res.render("payment/history.ejs", { payments });
    } catch (err) {
        console.log("Error in paymentHistory:", err);
        req.flash("error", "Unable to load payment history.");
        res.redirect("/listings");
    }
};