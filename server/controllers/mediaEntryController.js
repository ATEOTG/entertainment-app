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

exports.updateMediaBookmark = async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        media,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllMovieMediaEntries = async (req, res, next) => {
  try {
    const data = await Media.find({
      category: "Movie",
    });

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllTvMediaEntries = async (req, res, next) => {
  try {
    const data = await Media.find({
      category: "TV Series",
    });

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
