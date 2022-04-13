const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
module.exports = async function (req, res, next) {
  let token = req.header("x-auth-token");
  if (!token) {
    return res.status(400).send("Token is not provided");
  }
  let decoded = jwt.decode(token, config.get("jwtprivatekey"));
  if (!decoded) {
    return res.status(401).send("Token is no valid signin again");
  }
  console.log(decoded);
  let user = await User.findById(decoded._id);
  if (!user) {
    return res.status(401).send("User not found in db Signin again");
  }
  req.user = user;
  next();
};
