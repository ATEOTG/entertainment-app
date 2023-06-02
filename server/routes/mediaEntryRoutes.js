const express = require("express");
const mediaEntryController = require("../controllers/mediaEntryController");

const router = express.Router();

router.route("/").get(mediaEntryController.getAllMediaEntries);
router.route("/:id").patch(mediaEntryController.updateMediaBookmark);
router.route("/trending").get(mediaEntryController.getTrendingEntries);
router.route("/movies").get(mediaEntryController.getAllMovieMediaEntries);
router.route("/tv").get(mediaEntryController.getAllTvMediaEntries);
router.route("/bookmarked").get(mediaEntryController.getBookmarkedEntries);
router.route("/bookmarked/:id").patch(mediaEntryController.updateUserBookmark);
router
  .route("/bookmarked/remove/:id")
  .patch(mediaEntryController.removeUserBookmark);

module.exports = router;
