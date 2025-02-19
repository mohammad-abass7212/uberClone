const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("hello i am ");
});

module.exports = app;
