// require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config({ path: "./.env" }); // force exact file

const app = express();
app.use(express.json());

require("./config/db")();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/transactions", require("./routes/transactionRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

app.listen(5000, () => console.log("Server running"));
console.log("ENV CHECK:", process.env.MONGO_URI);