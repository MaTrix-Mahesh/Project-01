const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports.authmiddleware = async function (req, res, next) {
  try {

    let token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "unauthorized person",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decode.id);

    next();

  } catch (error) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }
};