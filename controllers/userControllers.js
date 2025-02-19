const usersModel = require("../models/userModel");
const { validationResult } = require("express-validator");
const { createUser } = require("../services/userServices");

const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullName, email, password } = req.body;

  try {
    const hashedPassword = await usersModel.hashPssword(password);
    const user = await createUser({
      firstname: fullName.firstname,
      lastname: fullName.lastname,
      email,
      password: hashedPassword,
    });
    const token = await user.generateAuthToken();
    return res.status(201).json({ token, user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await usersModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const token = await user.generateAuthToken();
  return res.status(200).json({ token, user });
};
module.exports = { registerUser, loginUser };
