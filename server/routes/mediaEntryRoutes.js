const express = require("express");
const mediaEntryController = require("../controllers/mediaEntryController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.isLoggedIn, mediaEntryController.getAllMediaEntries);
router.route("/:id").patch(mediaEntryController.updateMediaBookmark);
router.route("/trending").get(mediaEntryController.getTrendingEntries);
router
  .route("/movie")
  .get(authController.isLoggedIn, mediaEntryController.getAllMovieMediaEntries);
router
  .route("/tv")
  .get(authController.isLoggedIn, mediaEntryController.getAllTvMediaEntries);
router
  .route("/bookmarked")
  .get(authController.isLoggedIn, mediaEntryController.getBookmarkedEntries);
router
  .route("/bookmarked/:id")
  .patch(authController.isLoggedIn, mediaEntryController.updateUserBookmark);

module.exports = router;
