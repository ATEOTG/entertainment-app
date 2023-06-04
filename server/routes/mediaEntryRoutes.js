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
  .route("/movies")
  .get(authController.isLoggedIn, mediaEntryController.getAllMovieMediaEntries);
router
  .route("/tv")
  .get(authController.isLoggedIn, mediaEntryController.getAllTvMediaEntries);
router
  .route("/bookmarked")
  .get(authController.isLoggedIn, mediaEntryController.getBookmarkedEntries);
router.route("/bookmarked/:id").patch(mediaEntryController.updateUserBookmark);
router
  .route("/bookmarked/remove/:id")
  .patch(mediaEntryController.removeUserBookmark);

module.exports = router;
