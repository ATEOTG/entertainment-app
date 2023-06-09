const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Media = require("../models/mediaEntryModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Connection successful"));

const medias = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

const importData = async () => {
  try {
    await Media.create(medias);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Media.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
