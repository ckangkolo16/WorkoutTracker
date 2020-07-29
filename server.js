const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://userdb:password@ds339648.mlab.com:39648/heroku_snjll9ng",
  {
    useMongoClient: true,
  }
);

app.use(require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

//mlab db username **userdb** mlab psswd **password123**
