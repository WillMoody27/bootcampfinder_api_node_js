// Access express router
const express = require("express");
const router = express.Router(); // Access router
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps"); // Import controller methods

// Route methods
// Route methods [no id] for GET (all) and POST
router.route("/").get(getBootcamps).post(createBootcamp); // Get all bootcamps and create new bootcamp

// Route methods [by id] for GET (single), PUT, and DELETE
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp); // Get single bootcamp, update bootcamp, and delete bootcamp (by id

// Export router - this allows us to use the routes/bootcamps.js file. Connects the routes/bootcamps.js file to the server.js file.
module.exports = router;
