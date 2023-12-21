const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" }); // Load config file from path

// Connect to database
connectDB();

// Route files
const bootcamps = require("./routes/bootcamps");

const app = express();

// body parser - this allows us to use req.body in the routes/bootcamps.js file. It parses the request body and assigns it to req.body. This middleware function is called in the routes file.
app.use(express.json()); // Mount middleware

// ------------------------------------
// Mount middleware - This function will run every time a request is made to the server. It is a middleware function because it has access to the request and response objects. Express has a built-in middleware function called json() that parses incoming requests with JSON payloads. It parses the request body and assigns it to req.body. This middleware function is called in the routes file.

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // Mount middleware
}
// app.use(logger); // Mount middleware
// ------------------------------------

// Mount routers - this allows us to use the routes/bootcamps.js file. Connects the routes/bootcamps.js file to the server.js file.
app.use("/api/v1/bootcamps", bootcamps); // Mount router

const PORT = process.env.PORT || 5000; // Set port

// Routes
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
