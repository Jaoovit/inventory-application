require("dotenv").config();

const express = require("express");
const app = express();

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const coffeeRouter = require("./routes/coffeeRouter");
app.set("/", coffeeRouter);

const port = process.env.PORT || 4100;
app.listen(port, () => {
  console.log(`The server is running in the port ${port}`);
});
