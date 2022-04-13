const mongoose = require("mongoose");

const humanSchema = mongoose.Schema({
  name: String,

  age: {
    type: Number,
    min: [18, "you are too young to apply for CNIC"],
    max: [100, "your not need cnic"],
  },
  gender: Boolean,
  email: { type: String, required: true },
});
const Human = mongoose.model("Human", humanSchema);

module.exports = Human;
