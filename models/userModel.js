const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullName: {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
  },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  socketId: { type: String },
});
userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.statics.hashPssword = async function (password) {
  return await bcrypt.hash(password, 10);
};
const usersModel = mongoose.model("user", userSchema);
module.exports = usersModel;
