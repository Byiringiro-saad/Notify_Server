const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

//routes
const authRoutes = require("./routes/auth.routes");

// Middleware
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/auth", authRoutes);

// Server
app.listen(`${process.env.PORT}`, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
