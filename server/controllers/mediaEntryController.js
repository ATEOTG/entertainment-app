const Media = require("../models/mediaEntryModel");

exports.getAllMediaEntries = async (req, res, next) => {
  try {
    const data = await Media.find({});

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getTrendingEntries = async (req, res, next) => {
  try {
    const data = await Media.find({
      isTrending: true,
    });

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};
