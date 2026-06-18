const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },

    amount: Number
}, { _id: false });

const breakdownSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },

    amount: Number,

    items: [itemSchema]
}, { _id: false });

const transactionSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    title: String,

    type: {
        type: String,
        enum: ["Income", "Expense"]
    },

    totalAmount: Number,

    paymentMethod: String,

    note: String,

    date: Date,

    breakdown: [breakdownSchema]

}, {
    timestamps: true
});

module.exports = model("Transaction", transactionSchema);