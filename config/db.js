const mongoose = require("mongoose");

const connection = (URL) => {
  try {
    mongoose.connect(URL);

    const db = mongoose.connection;

    db.once("open", () => {
      console.log("Db Connected");
    });
  } catch (err) {
    console.log("DB Connection Error..!", err);
  }
};

module.exports = connection;
