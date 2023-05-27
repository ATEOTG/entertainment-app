const express = require("express");
const mediaEntryRouter = require("./routes/mediaEntryRoutes");

const app = express();
app.enable("trust proxy");
app.use(express.json());

app.use("/api/v1/home", mediaEntryRouter);

module.exports = app;
