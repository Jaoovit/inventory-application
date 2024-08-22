require("dotenv").config();

const express = require("express");
const coffeeRouter = require("./routes/coffeeRouter");
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", coffeeRouter);

const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  console.log(`The server is running in the port ${PORT}`);
});
