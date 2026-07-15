const PDFDocument = require("pdfkit");
const fs = require("fs");

module.exports = function generateInvoice(data) {
    return new Promise((resolve, reject) => {
        try {
            const {
                invoiceNumber,
                bookingId,
                paymentId,
                hotelName,
                customerName,
                checkIn,
                checkOut,
                roomType,
                adults,
                children,
                amount,
                status,
                date,
                filePath,
            } = data;

            const doc = new PDFDocument({ size: "A4", margin: 50 });
            const stream = fs.createWriteStream(filePath);

            doc.pipe(stream);

            const gstRate = 0.18;
            const baseAmount = Number(amount);
            const gstAmount = Math.round(baseAmount * gstRate * 100) / 100;
            const totalAmount = Math.round((baseAmount + gstAmount) * 100) / 100;

            doc
                .fontSize(22)
                .fillColor("#333333")
                .text("OpenStay", { align: "left" })
                .fontSize(10)
                .fillColor("#666666")
                .text("Hotel Rental & Review System", { align: "left" });

            doc.moveDown(1);
            doc
                .strokeColor("#cccccc")
                .lineWidth(1)
                .moveTo(50, doc.y)
                .lineTo(550, doc.y)
                .stroke();

            doc.moveDown(1);
            doc
                .fontSize(18)
                .fillColor("#000000")
                .text("PAYMENT INVOICE", { align: "center" });

            doc.moveDown(1.5);

            doc.fontSize(11).fillColor("#000000");
            doc.text(`Invoice Number: ${invoiceNumber}`);
            doc.text(`Booking ID: ${bookingId}`);
            doc.text(`Payment ID: ${paymentId}`);
            doc.text(`Date: ${new Date(date).toLocaleString("en-IN")}`);

            doc.moveDown(1);
            doc
                .strokeColor("#cccccc")
                .lineWidth(1)
                .moveTo(50, doc.y)
                .lineTo(550, doc.y)
                .stroke();
            doc.moveDown(1);

            doc.fontSize(13).fillColor("#000000").text("Customer Details", { underline: true });
            doc.moveDown(0.5);
            doc.fontSize(11).text(`Customer Name: ${customerName}`);

            doc.moveDown(1);
            doc.fontSize(13).fillColor("#000000").text("Booking Details", { underline: true });
            doc.moveDown(0.5);
            doc.fontSize(11).text(`Hotel Name: ${hotelName}`);
            doc.text(`Room Type: ${roomType}`);
            doc.text(`Check In: ${checkIn}`);
            doc.text(`Check Out: ${checkOut}`);
            doc.text(`Guests: ${adults} Adult(s), ${children || 0} Children`);

            doc.moveDown(1);
            doc
                .strokeColor("#cccccc")
                .lineWidth(1)
                .moveTo(50, doc.y)
                .lineTo(550, doc.y)
                .stroke();
            doc.moveDown(1);

            doc.fontSize(13).fillColor("#000000").text("Payment Summary", { underline: true });
            doc.moveDown(0.5);

            const tableTop = doc.y + 10;
            doc.fontSize(11);

            doc.text("Room Amount", 50, tableTop);
            doc.text(`Rs. ${baseAmount.toFixed(2)}`, 400, tableTop, { align: "right" });

            doc.text("GST (18%)", 50, tableTop + 20);
            doc.text(`Rs. ${gstAmount.toFixed(2)}`, 400, tableTop + 20, { align: "right" });

            doc
                .strokeColor("#cccccc")
                .lineWidth(1)
                .moveTo(50, tableTop + 40)
                .lineTo(550, tableTop + 40)
                .stroke();

            doc
                .fontSize(13)
                .fillColor("#000000")
                .text("Total Amount", 50, tableTop + 50, { bold: true });
            doc
                .fontSize(13)
                .text(`Rs. ${totalAmount.toFixed(2)}`, 400, tableTop + 50, { align: "right" });

            doc.moveDown(3);

            doc
                .fontSize(12)
                .fillColor(status === "paid" ? "#1a7f37" : "#c0392b")
                .text(`Payment Status: ${status.toUpperCase()}`, { align: "left" });

            doc.moveDown(2);
            doc
                .fontSize(9)
                .fillColor("#999999")
                .text("This is a system-generated invoice from OpenStay.", { align: "center" });

            doc.end();

            stream.on("finish", () => {
                resolve(filePath);
            });

            stream.on("error", (err) => {
                reject(err);
            });
        } catch (err) {
            reject(err);
        }
    });
};