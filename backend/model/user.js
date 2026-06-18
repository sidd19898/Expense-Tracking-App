const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String
}, {
    timestamps: true
});

module.exports = model("User", userSchema);