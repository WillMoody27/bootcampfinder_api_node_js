const express = require("express");
const dotenv = require("dotenv");

// Route files
const bootcamps = require("./routes/bootcamps");

// Load env vars
dotenv.config({ path: "./config/config.env" }); // Load config file from path

const app = express();

// Mount routers - this allows us to use the routes/bootcamps.js file. Connects the routes/bootcamps.js file to the server.js file.
app.use("/api/v1/bootcamps", bootcamps); // Mount router

const PORT = process.env.PORT || 5000; // Set port

// Routes
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
