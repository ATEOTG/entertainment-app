const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();
router.route("/logout").get(authController.logout);

router.route("/").get(authController.protect, userController.getAllUsers);
router.route("/:id").get(userController.getUser);
router.route("/login").post(userController.login);
router.route("/signup").post(userController.signup);

module.exports = router;
