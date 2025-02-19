const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("db is connected successfully");
    })
    .catch((err) => console.log(err));
};
module.exports = connectDb;
