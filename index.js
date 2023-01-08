const express = require("express");
require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");
const connectDB = require("../SignupLogin/db/conn");
const authRoutes = require("../SignupLogin/routes/user")
const manageRoutes = require("../SignupLogin/routes/manage")
require("../SignupLogin/db/conn");



const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Under Construction");
});

//routes
// app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/manage", manageRoutes); 

//checking port
app.listen(port, () => {
  console.log(`App is running in ${port}`);
});
