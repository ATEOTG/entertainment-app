const express = require("express");

const app = express();
app.enable("trust proxy");

app.get("/api", (req, res) => {
  //   res.status(241).json({ users: [1, 2, 3] });
});

module.exports = app;
