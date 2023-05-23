const mongoose = require("mongoose");

const mediaEntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "An entry must have a title."],
    },
    year: Number,
    category: {
      type: String,
      enum: {
        values: ["Movie", "TV Series"],
        message: "An entry must either be a movie or a tv series",
      },
    },
    rating: {
      type: String,
      enum: {
        values: ["PG", "E", "18+"],
        message: "An entry must have a rating of PG, E, or 18+",
      },
    },
    isBookmarked: Boolean,
    isTrending: Boolean,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Media = mongoose.model("Media", mediaEntrySchema);

module.exports = Media;
