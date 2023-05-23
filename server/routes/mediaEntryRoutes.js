const express = require("express");
const mediaEntryController = require("../controllers/mediaEntryController");

const router = express.Router();

router.route("/").get(mediaEntryController.getAllMediaEntries);
router.route("/trending").get(mediaEntryController.getTrendingEntries);

module.exports = router;
