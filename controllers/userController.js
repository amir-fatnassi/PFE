const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const { validationResult } = require("express-validator");

module.exports = {
  create: async (req, res, next) => {
    const { name, email, password } = req.body;
    await userModel
      .create({
        name,
        email,
        password
      })
      .then(() => {
        res.json({
          status: "success",
          message: "User added successfully!!!",
          data: null
        });
      })
      .catch(err => {
        next(err);
      });
  },
  signup: async (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    try {
      let userInfo = userModel.findOne({ email });
      if (userInfo) {
        res.status(400).json({ message: "Email Already Exist!!!" });
      } else {
        await userModel
          .create({
            name,
            email,
            password
          })
          .then(() => {
            res.json({
              status: "success",
              message: "User added successfully!!!",
              data: null
            });
          });
      }
    } catch (err) {
      next(err);
    }
  },
  authenticate: function(req, res, next) {
    const { name, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    try{
      let userInfo = userModel.findOne({ email });
      if ( userInfo != null && bcrypt.compareSync(password, userInfo.password)) {
        const token = jwt.sign(
          { id: userInfo._id },
          process.env.jwtSecret,
          { expiresIn: "1h" }
        );

        res.status(200).json({
          status: "success",
          message: "user found!!!",
          data: { user: userInfo, token: token }
        });
      } else {
        res.status(400).json({ message: "Invalid email/password!!!"});
      }
    } catch(err){
      next(err)
    }
  }
};