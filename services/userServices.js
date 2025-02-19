const usersModel = require("../models/userModel");

const createUser = async ({ firstname, lastname, email, password }) => {
  try {
    const user = new usersModel({
      fullName: { firstname, lastname },
      email,
      password,
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createUser };
