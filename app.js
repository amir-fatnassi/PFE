const logger = require("morgan");
const hotelRouter = require('./routes/hotelRoutes');
const userRouter = require('./routes/userRoutes');
const bodyParser = require("body-parser");
const express = require("express");
const validateUser = require("./middleware/auth");
const path = require("path");

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/users', userRouter); 

module.exports = app

// c17koqExsCrGYPGa