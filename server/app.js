const express = require("express");
const mediaEntryRouter = require("./routes/mediaEntryRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
app.enable("trust proxy");
app.use(express.json());

app.use("/api/v1/home", mediaEntryRouter);
app.use("/api/v1/users-media", userRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
