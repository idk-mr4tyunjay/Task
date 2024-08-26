const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: true },
    city: { type: String, required: true },
  });

module.exports = mongoose.model("Contact", ContactSchema);
