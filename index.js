const express = require("express");
const app = express();
const db = require("./config/db");
const cors = require("cors");
require("dotenv").config();

(() => {
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
    })
  );

  db(process.env.MONGO_URL);

  app.get("/demo", (req, res) => {
    res.send("Hello, I'm node 1st APP");
  });
})();

app.listen(process.env.PORT, () => {
  console.log(`Server running in ${process.env.PORT}`);
}); 
