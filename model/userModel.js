const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, require: true },
  age: { type: Number, require: false },
  email: { type: String, require: true },
  mobile: { type: Number, require: true },
  password: { type: String, require: true },
});

const model = mongoose.model("user", schema);

module.exports = model;
