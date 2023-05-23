const express = require("express");
const mediaEntryRouter = require("./routes/mediaEntryRoutes");

const app = express();
app.enable("trust proxy");

app.use("/api/v1/home-all", mediaEntryRouter);

app.get("/api", (req, res) => {
  res.status(241).json({ users: [1, 2, 3] });
});

module.exports = app;
