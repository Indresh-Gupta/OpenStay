const express = require("express");
const router=express.Router();
const wrapAsync= require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Booking=require("../models/booking.js");
const {isLoggedIn, isOwner,isBookingOwner, validateListing} = require("../middleware.js");

const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.get("/search", wrapAsync(listingController.search));
router.route("/")
.get( wrapAsync(listingController.index))                                              // Index Route          
 .post(isLoggedIn,upload.array('listing[image]'),validateListing, wrapAsync(listingController.createListing));          //Create Route

// .post( upload.single('listing[image][url]'), (req, res)=>{
//   res.send(req.file);
// })



//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm );

router.route("/:id")
.get( wrapAsync(listingController.showListing ))                                           //Show Route
.put(isLoggedIn,isOwner,upload.array("listing[image]"),validateListing,  wrapAsync(listingController.updateListing) )    //Update Route
.delete(isLoggedIn ,isOwner, wrapAsync(listingController.destroyListing) );                //Delete Route

 //Edit Route
 router.get("/:id/edit",isLoggedIn ,isOwner, wrapAsync(listingController.renderEditForm));

 // //Booking show specific listing
router.post("/:id",isLoggedIn, wrapAsync(listingController.createBooking));
router.get("/:id/book",isLoggedIn, wrapAsync(listingController.bookListing));
// Route to download receipt
// router.get("/bookings/receipts/:id",isLoggedIn,isBookingOwner, wrapAsync(listingController.getReceipt));
router.delete("/bookings/cancel/:id", isLoggedIn, isBookingOwner, wrapAsync(listingController.cancelBooking));

  module.exports=router;
