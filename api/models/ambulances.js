const mongoose = require("mongoose");
const ambulanceSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  address: { type: String, required: true },
  phoneNunber: { type: String, required: true },
  img: { type: String },
});

module.exports = mongoose.model("Ambulance", ambulanceSchema);
