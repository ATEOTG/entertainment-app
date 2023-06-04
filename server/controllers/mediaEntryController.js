const Media = require("../models/mediaEntryModel");
const User = require("../models/userModel");

exports.getAllMediaEntries = async (req, res, next) => {
  try {
    const data = await Media.find({});
    res.status(200).json({
      status: "success",
      data,
      user: res.locals.user,
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
      user: res.locals.user,
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
      user: res.locals.user,
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
    const data = await Media.find({});

    res.status(200).json({
      status: "success",
      data,
      user: res.locals.user,
    });
  } catch (err) {
    console.log(err);
  }
};

async function addUserBookmark(mediaEntry, currentUser, res) {
  const updatedUser = await User.findByIdAndUpdate(
    currentUser.id,
    { bookmarked: [...currentUser.bookmarked, mediaEntry.id] },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
}

async function removeUserBookmark(mediaEntry, currentUser, res) {
  const bookmarkFilter = currentUser.bookmarked.filter(
    (el) => el != mediaEntry.id
  );
  const updatedUser = await User.findByIdAndUpdate(
    currentUser.id,
    { bookmarked: bookmarkFilter },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
}

exports.updateUserBookmark = async (req, res, next) => {
  try {
    const entry = await Media.findById(req.params.id);
    const user = await User.findById(req.body.id);
    if (user.containsDuplicateBookmark(entry.id)) {
      removeUserBookmark(entry, user, res);
    } else {
      addUserBookmark(entry, user, res);
    }
  } catch (err) {
    console.log(err);
  }
};
