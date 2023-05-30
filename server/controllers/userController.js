const User = require("../models/userModel");

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

exports.signup = async (req, res, next) => {
  try {
    await User.create(req.body);

    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      next(new Error("Please provide email and password"));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new Error("Incorrect email or password"));
    }

    res.status(200).json({
      status: "successfully logged in",
    });
  } catch (err) {
    console.log(err);
  }
};
