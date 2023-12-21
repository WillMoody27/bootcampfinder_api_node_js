/**
 * @desc Logs the request method, protocol, host, and original url
 * **/

const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next(); // This should always be called to move on to the next middleware function in the cycle/stack
};

module.exports = logger;
