const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

module.exports = function validateUser(req, res, next) {
  jwt.verify(req.headers["x-access-token"], process.env.jwtSecret, function(
    err,
    decoded
  ) {
    if (err) {
      res.json({ status: "error", message: err.message, data: null });
    } else {
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
};
