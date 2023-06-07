const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const compression = require("compression");

const mediaEntryRouter = require("./routes/mediaEntryRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.enable("trust proxy");
app.use(cors());
app.options("*", cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(mongoSanitize());
app.use(xss());

app.use("/api/v1/entries", mediaEntryRouter);
app.use("/api/v1/users", userRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
