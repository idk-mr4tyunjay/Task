const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
  position: String,
});

module.exports = mongoose.model("Client", ClientSchema);
