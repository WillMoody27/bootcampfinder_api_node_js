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
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

/**
 * @desc    Get single bootcamp
 * @route   GET /api/v1/bootcamps/:id
 * @access  Public - no token required
 * **/
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
};

/**
 * @desc    Create new bootcamp
 * @route   POST /api/v1/bootcamps
 * @access  Private - token required
 * **/
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
};

/**
 * @desc    Update bootcamp
 * @route   PUT /api/v1/bootcamps/:id
 * @access  Private - token required
 * **/
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

/**
 * @desc    Delete bootcamp
 * @route   DELETE /api/v1/bootcamps/:id
 * @access  Private - token required
 * **/
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
