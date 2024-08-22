const express = require("express");
const coffeeController = require("../controllers/coffeeController");
const router = express.Router();

router.get("/", coffeeController.getListOfAllCoffee);
router.get("/add", coffeeController.showForms);

module.exports = router;
