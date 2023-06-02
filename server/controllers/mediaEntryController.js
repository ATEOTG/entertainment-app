const Media = require("../models/mediaEntryModel");
const User = require("../models/userModel");

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

exports.getBookmarkedEntries = async (req, res) => {
  try {
    const data = await Media.find({ isBookmarked: true });

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateUserBookmark = async (req, res, next) => {
  try {
    const entry = await Media.findById(req.body.id);
    const user = await User.findById(req.params.id);
    if (user.containsDuplicateBookmark(entry.id)) {
      return next(new Error("That entry has already been bookmarked!"));
    }
    const updatedUser = await User.findByIdAndUpdate(
      user.id,
      { bookmarked: [...user.bookmarked, entry.id] },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: updatedUser,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.removeUserBookmark = async (req, res, next) => {
  try {
    const entry = await Media.findById(req.body.id);
    const user = await User.findById(req.params.id);
    const bookmarkFilter = user.bookmarked.filter((el) => el != entry.id);
    if (bookmarkFilter.length === user.bookmarked.length) {
      return next(new Error("Id is not in bookmarked!"));
    }

    const updatedUser = await User.findByIdAndUpdate(
      user.id,
      { bookmarked: bookmarkFilter },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: updatedUser,
    });
  } catch (err) {
    console.log(err);
  }
};
