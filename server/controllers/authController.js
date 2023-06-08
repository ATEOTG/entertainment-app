const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const signToken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  // const cookieOptions = {
  //   expires: new Date(
  //     Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
  //   ),
  //   httpOnly: false,
  //   secure: true,
  //   sameSite: "none",
  // };

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: false,
    secure: true,
    samesite: "None",
    domain: "ateotg-entertainment-app.netlify.app",
  });
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    )
      token = req.headers.authorization.split(" ")[1];
    else if (req.cookies.jwt) token = req.cookies.jwt;
    if (!token) {
      return next(new Error("You are not logged in. Log in to get access"));
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        new Error("The user belonging to this token no longer exists.")
      );
    }

    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  } catch (err) {
    next(new Error(err.message));
  }
};

exports.isLoggedIn = async (req, res, next) => {
  console.log(req.cookies);
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    sameSite: "None",
    httpOnly: false,
    secure: false,
  });

  res.status(200).json({
    status: "success",
  });
};
