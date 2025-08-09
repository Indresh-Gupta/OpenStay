const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
    },
    Adult:Number,
    Child:Number,
    Guest: {  
        type: Number,
        required: true,
    },

    roomType: {
        type: String,
        required: true,
    },
    listing: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true
    },
    author: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
