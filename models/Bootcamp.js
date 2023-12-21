const mongoose = require("mongoose");

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"], // Required field
    unique: true, // Prevent duplicate names
    trim: true, // Trim whitespace
    maxlength: [50, "Name cannot be more than 50 characters"], // Max length
  },
  slug: String, // Slugified version of name - for URL
  description: {
    type: String,
    required: [true, "Please add a description"], // Required field
    maxlength: [500, "Description cannot be more than 500 characters"], // Max length
  },
  website: {
    type: String,
    match: [
      // Regex for URL
      /^(ftp|http|https):\/\/[^ "]+$/, // Regex for URL
      "Please use a valid URL with HTTP or HTTPS", // Indicates error message
    ],
  },
  phone: {
    type: String,
    maxlength: [20, "Phone number cannot be longer than 20 characters"], // Max length
  },
  email: {
    type: String,
    match: [
      // Regex for email
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, // Regex for email
      "Please use a valid email address", // Indicates error message
    ],
  },
  address: {
    type: String,
    required: [true, "Please add an address"], // Required field
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ["Point"], // Enumerated list
      required: false,
    },
    coordinates: {
      type: [Number],
      required: false,
      index: "2dsphere", // Create geospatial index
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  careers: {
    // Array of strings
    type: [String],
    required: true,
    enum: [
      // Enumerated list
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Data Science",
      "Business",
      "Other",
    ],
  },
  averageRating: {
    // Average rating of bootcamp
    type: Number,
    min: [1, "Rating must be at least 1"], // Min rating
    max: [10, "Rating cannot be more than 10"], // Max rating
  },
  averageCost: Number, // Average cost of bootcamp
  photo: {
    // Photo name
    type: String,
    default: "no-photo.jpg", // Default photo if none provided
  },
  housing: {
    // Housing provided
    type: Boolean,
    default: false, // Default value
  },
  jobAssistance: {
    // Job assistance provided
    type: Boolean,
    default: false, // Default value
  },
  jobGuarantee: {
    // Job guarantee provided
    type: Boolean,
    default: false, // Default value
  },
  acceptGi: {
    // GI Bill accepted
    type: Boolean,
    default: false, // Default value
  },
  createdAt: {
    // Date created
    type: Date,
    default: Date.now, // Default value
  },
});

// Export model - for use in controllers
module.exports = mongoose.model("Bootcamp", BootcampSchema);
