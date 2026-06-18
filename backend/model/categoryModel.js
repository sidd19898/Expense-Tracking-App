const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    name: String,

    parentCategory: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        default: null
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

module.exports = model("Category", categorySchema);