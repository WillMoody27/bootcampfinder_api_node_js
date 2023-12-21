const Bootcamp = require("../models/Bootcamp");

// export each method to be used in the routes file
/**
 * Setup of proper documentation for each method in the routes file
 * Middleware function to get all bootcamps
 * **/

// Middleware functions are functions that have access to the request and response objects. Express has a built-in middleware function called json() that parses incoming requests with JSON payloads. It parses the request body and assigns it to req.body. This middleware function is called in the routes file.

/**
 * @desc    Get all bootcamps
 * @route   GET /api/v1/bootcamps
 * @access  Public - no token required
 * **/
exports.getBootcamps = async (req, res, next) => {
  // res.status(200).json({ success: true, msg: "Show all bootcamps" });
  try {
    const bootcamps = await Bootcamp.find(); // Find all bootcamps
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps }); // Send response
  } catch (err) {
    res.status(400).json({ success: false }); // Send response
  }
};

/**
 * @desc    Get single bootcamp
 * @route   GET /api/v1/bootcamps/:id
 * @access  Public - no token required
 * **/
exports.getBootcamp = async (req, res, next) => {
  // res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });

  try {
    const bootcamp = await Bootcamp.findById(req.params.id); // Find bootcamp by id
    if (!bootcamp) {
      // If no bootcamp - checks  if bootcamp exists
      return res.status(400).json({ success: false }); // Send response
    }
    res.status(200).json({ success: true, data: bootcamp }); // Send response
  } catch (err) {
    res.status(400).json({ success: false }); // Send response
  }
};

/**
 * @desc    Create new bootcamp
 * @route   POST /api/v1/bootcamps
 * @access  Private - token required
 * **/
exports.createBootcamp = async (req, res, next) => {
  // console.log(req.body);
  // res.status(200).json({ success: true, msg: "Create new bootcamp" });

  try {
    const bootcamp = await Bootcamp.create(req.body); // Create bootcamp
    res.status(201).json({ success: true, data: bootcamp }); // Send response
  } catch (err) {
    res.status(400).json({ success: false }); // Send response
  }
};

/**
 * @desc    Update bootcamp
 * @route   PUT /api/v1/bootcamps/:id
 * @access  Private - token required
 * **/
exports.updateBootcamp = async (req, res, next) => {
  // res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      // Find bootcamp by id and update
      new: true, // Return updated bootcamp
      runValidators: true, // Run validators
    });
    if (!bootcamp) {
      // If no bootcamp - checks  if bootcamp exists
      return res.status(400).json({ success: false }); // Send response
    }
    res.status(200).json({ success: true, data: bootcamp }); // Send response
  } catch (err) {
    res.status(400).json({ success: false }); // Send response
  }
};

/**
 * @desc    Delete bootcamp
 * @route   DELETE /api/v1/bootcamps/:id
 * @access  Private - token required
 * **/
exports.deleteBootcamp = async (req, res, next) => {
  // res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });

  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id); // Find bootcamp by id and delete
    if (!bootcamp) {
      // If no bootcamp - checks  if bootcamp exists
      return res.status(400).json({ success: false }); // Send response
    }
    res.status(200).json({ success: true, data: {} }); // Send response
  } catch (err) {
    res.status(400).json({ success: false }); // Send response
  }
};
