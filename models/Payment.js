const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    booking: {
        type: Schema.Types.ObjectId,
        ref: "Booking",
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    listing: {
        type: Schema.Types.ObjectId,
        ref: "Listing",
        required: true,
    },
    orderId: {
        type: String,
        required: true,
    },
    paymentId: {
        type: String,
        default: null,
    },
    signature: {
        type: String,
        default: null,
    },
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        default: "INR",
    },
    status: {
        type: String,
        enum: ["created", "paid", "failed"],
        default: "created",
    },
    receipt: {
        type: String,
        required: true,
    },
    invoicePath: {
        type: String,
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Payment", paymentSchema);