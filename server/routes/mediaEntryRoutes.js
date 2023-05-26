const express = require("express");
const mediaEntryController = require("../controllers/mediaEntryController");

const router = express.Router();

router.route("/").get(mediaEntryController.getAllMediaEntries);
router.route("/:id").patch(mediaEntryController.updateMediaBookmark);
router.route("/trending").get(mediaEntryController.getTrendingEntries);
router.route("/movies").get(mediaEntryController.getAllMovieMediaEntries);
router.route("/tv").get(mediaEntryController.getAllTvMediaEntries);

module.exports = router;
