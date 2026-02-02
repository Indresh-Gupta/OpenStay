const Listing= require("../models/listing");
const Booking=require("../models/booking.js");
const { cloudinary } = require("../cloudConfig");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

module.exports.search = async (req, res) => {
  const { location } = req.query;

  // If no location provided, redirect or show all
  if (!location) {
    return res.redirect("/listings");
  }

  const filter = { location: new RegExp(location, "i") };

  try {
    const allListings = await Listing.find(filter);
    res.render("listings/index.ejs", { allListings });
  } catch (err) {
    console.log(err);
    res.send("Error occurred while searching listings");
  }
};


module.exports.index=async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  };



 

  module.exports.renderNewForm=(req, res) => {
    res.render("listings/new.ejs" ,{ currUser: req.user });
  };

  module.exports.showListing=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({
      path:"reviews" ,
      populate :{ path:"author", },
      })
        .populate("owner");
    if(!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      res.redirect("/listings");
    }
    const bookings = await Booking.find({ listing: id }).populate("user");
    res.render("listings/show.ejs", { listing ,bookings});
  };

  module.exports.createListing = async (req, res, next) => {
    if (!req.files || req.files.length === 0) {
        console.log("File upload failed: req.files is undefined or empty");
        return res.status(400).json({ error: "No files uploaded" });
    }
    const images = req.files.map(f => ({
        url: f.path, 
        filename: f.filename  
    }));

    const newListing = new Listing(req.body.listing);
    newListing.image = images; 
    newListing.owner = req.user._id;  

    // Save the new listing to the database
    try {
        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
    } catch (err) {
        console.log("Error saving listing:", err);
        res.status(500).json({ error: "Error saving listing" });
    }
};



module.exports.renderEditForm=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      res.redirect("/listings");
    }

    //let originalImageUrl = listing.image[[0],[1],[2],[3],[4]].url;
    //originalImageUrl=originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing });
  };

  
  module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  
    
    const newImages = req.files.map(file => ({
      url: file.path,
      filename: file.filename,
    }));
  
    if (!listing.image) {
      listing.image = []; 
    }
  
    listing.image.push(...newImages);
    if (req.body.deleteImages) {
      for (let filename of req.body.deleteImages) {
        await cloudinary.uploader.destroy(filename);
      }
      listing.image = listing.image.filter(img => !req.body.deleteImages.includes(img.filename));
    }
  
    await listing.save();
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${listing._id}`);
  };
  
  // module.exports.updateListing=async (req, res) => {
  //     let { id } = req.params;
  //     let listing=await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  //     if(typeof req.file !=="undefined") {
  //     let url=req.file.path;
  //     let filename=req.file.filename;
  //     listing.image={url, filename};
  //     await listing.save();
  //     }
  //     req.flash("success", "Listing Updated!");
  //     res.redirect(`/listings/${id}`);
  //   };

module.exports.destroyListing=async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", " Listing Deleted!");
    res.redirect("/listings");
  };

  
  module.exports.bookListing = async (req, res) => {
    

    try {
      let { id } = req.params;
        console.log("Listing ID:", id);
        console.log("Current User:", req.user); 

        // Fetch the listing
        const listing = await Listing.findById(id)
            .populate({
                path: "reviews",
                populate: { path: "author" },
            })
            .populate("owner");

        console.log("Fetched Listing:", listing); 
        if (!listing) {
            req.flash("error", "Listing you requested does not exist!");
            return res.redirect("/listings");
        }

       
        const bookingExists = await Booking.exists({ 
            user: req.user._id, 
            listing: id  
        });

        console.log(req.body); 
        
    
        res.render("listings/book.ejs", {listing,currUser:req.user,bookingExists});

    } catch (err) {
        console.error(err);
        req.flash("error", "Something went wrong while fetching the listing.");
        res.redirect("/listings");
    }
};




module.exports.createBooking = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Requested body:", req.body);
        
        const { checkIn, checkOut, Adult, child, guest, roomType, listing, author } = req.body;

        // Validate input
        if (!checkIn || !checkOut || !Adult || !child || !guest || !roomType || !listing || !author) {
            console.log("Missing Fields:", { checkIn, checkOut, guest, roomType, listing, author });
            return res.status(400).json({ error: "All fields are required" });
        }

        const newBooking = new Booking({
            checkIn: checkIn,
            checkOut: checkOut,
            Adult: Number(Adult),
            Child: Number(child),
            Guest: Number(guest),
            roomType: roomType,
            listing: listing,
            author: author,
            user: req.user._id,
        });

        await newBooking.save();
        console.log("New Booking ID:", newBooking._id);

        const booking = await Booking.findById(newBooking._id).populate({
            path: "listing",
            select: "title location price",
        });

        console.log("Populated Listing Data:", booking.listing);

        // Ensure listing is populated before generating receipt
        if (!booking.listing) {
            console.error("Listing not found or not populated!");
            return res.status(500).json({ error: "Listing details not available" });
        }

        const receiptPath = path.join(
            __dirname,
            `../public/receipts/receipt_${newBooking._id}.pdf`
        );

        await generateReceipt(newBooking, booking.listing, receiptPath, req.user);

        console.log("Checking for receipt file:", receiptPath);
        req.flash("success", "Booking successful! Download your receipt.");
        res.redirect(`/listings/${id}`);
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// **Generate PDF Receipt**
const generateReceipt = (booking, listing, filePath, user) => {
    return new Promise((resolve, reject) => {
        console.log("Generating receipt for:", booking._id);
        console.log("Listing data in generateReceipt:", listing); 

        if (!listing) {
            console.error("Listing is undefined in generateReceipt!");
            return reject("Listing is undefined");
        }

        const doc = new PDFDocument();
        const stream = fs.createWriteStream(filePath);

        doc.pipe(stream);

        doc.fontSize(20).text("Hotel Booking Receipt", { align: "center" });
        doc.moveDown();

        const formattedCheckIn = new Date(booking.checkIn).toLocaleDateString();
        const formattedCheckOut = new Date(booking.checkOut).toLocaleDateString();

        doc.fontSize(14).text(`Guest Name: ${user.username}`);
        doc.text(`Hotel Name: ${listing.title || "N/A"}`);
        doc.text(`Address: ${listing.location || "N/A"}`);
        doc.text(`Price: ${listing.price || "N/A"}`);
        doc.text(`Check-in: ${formattedCheckIn}`);
        doc.text(`Check-out: ${formattedCheckOut}`);
        doc.text(`Adult: ${booking.Adult || "N/A"}`);
        doc.text(`Child: ${booking.Child || "N/A"}`);
        doc.text(`Total Guests: ${booking.Guest || "N/A"}`);
        doc.text(`Room Type: ${booking.roomType}`);
        doc.text(`Booking ID: ${booking._id}`);

        doc.moveDown();
        doc.text("Thank you for booking with us!", { align: "center" });

        doc.end();

        stream.on("finish", () => {
            console.log("Receipt generated successfully:", filePath);
            resolve();
        });

        stream.on("error", (err) => {
            console.error("Error generating receipt:", err);
            reject(err);
        });
    });
};


// Serve the receipt file for download
module.exports.getReceipt = async (req, res) => {
  try {
    const { id } = req.params;
    const receiptPath = path.join(__dirname, `../public/receipts/receipt_${id}.pdf`);
    
    console.log("Checking for receipt file:", receiptPath);
    
    if (fs.existsSync(receiptPath)) {
      console.log("Receipt found, sending for download...");
      return res.download(receiptPath, `Hotel_Receipt_${id}.pdf`); 
    }

    console.log("Receipt not found!");
    req.flash("error", "Receipt not found!");
    return res.redirect("/listings"); 

  } catch (error) {
    console.error("Error fetching receipt:", error);
    res.status(500).send("Internal Server Error");
  }
};



module.exports.cancelBooking = async (req, res) => {
  try {
      const { id } = req.params;
      const booking = await Booking.findById(id);

      if (!booking) {
          req.flash("error", "Booking not found.");
          return res.redirect("/listings");
      }

      const listingId = booking.listing; 
      await Booking.findByIdAndDelete(id);
      
      req.flash("success", "Booking canceled successfully.");
      res.redirect(`/listings/${listingId}`); 
  } catch (err) {
      console.error(err);
      req.flash("error", "Failed to cancel booking.");
      res.redirect("/listings");
  }
};

