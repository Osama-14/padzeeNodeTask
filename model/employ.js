const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employSchema = new Schema({
  name: {
    type: String,
  },
  designation: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  age: {
      type : Number
  }
},{timestamps : true});

const employ = mongoose.model ('employ', employSchema)
module.exports = employ