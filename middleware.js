const Listing=require("./models/listing");
const Review=require("./models/reviews.js");
const ExpressError= require("./utils/ExpressError.js");
const{ listingSchema, reviewSchema} =require("./schema.js");


module.exports.isLoggedIn =(req, res, next) =>{
    if (!req.isAuthenticated()) {
        req.session.redirectUrl=req.originalUrl;
        req.flash("error", "you must be logged in to create listing!");
        return res.redirect("/");
    }
    next();
}

module.exports.saveRedirectUrl= (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner= async (req,res,next)=>{
    let { id } = req.params;
    let listing =await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)) {
      req.flash("error", "you are not the owner of this listing");
     return res.redirect(`/listings/${id}`);
    }

    next();
}

const Booking = require("./models/booking");

module.exports.isBookingOwner = async (req, res, next) => {
    try {
        let { id } = req.params;
        let booking = await Booking.findById(id);

        if (!booking) {
            req.flash("error", "Booking not found.");
            return res.redirect(`/listings/${id}`);
        }

        if (!booking.user.equals(res.locals.currUser._id)) {
            req.flash("error", "You are not the owner of this booking.");
            return res.redirect(`/listings/${id}`);
        }

        next();
    } catch (err) {
        console.error(err);
        req.flash("error", "Something went wrong.");
        res.redirect(`/listings/${id}`);
    }
};


module.exports.validateListing=(req, res, next) =>{
    let {error} = listingSchema.validate(req.body);
  
  if(error){
    let errMsg=error.details.map((el) =>el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else{
    next();
  }
};

module.exports.validateReview=(req, res, next) =>{
    let {error} = reviewSchema.validate(req.body);
  
  if(error){
    let errMsg=error.details.map((el) =>el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else{
    next();
  }
  };

  module.exports.isReviewAuthor= async (req,res,next)=>{
    let {id,reviewId } = req.params;
    let review =await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)) {
      req.flash("error", "you are not the author of this listing");
     return res.redirect(`/listings/${id}`);
    }

    next();
}