const User = require("../models/userModel");
const authController = require("./authController");

exports.getAllUsers = async (req, res, next) => {
  try {
    const data = await User.find({});

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    authController.createSendToken(user, 201, req, res);
  } catch (err) {
    const error = err.message;
    if (error.includes("password:")) {
      return next(new Error("Password must be at least 8 characters long."));
    } else if (error.includes("passwordConfirm:")) {
      return next(new Error("Passwords do not match."));
    } else {
      return next(new Error(err));
    }
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new Error("Please provide email and password"));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new Error("Incorrect email or password"));
    }

    authController.createSendToken(user, 200, req, res);
  } catch (err) {}
};
