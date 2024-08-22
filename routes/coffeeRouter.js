const express = require("express");
const coffeeController = require("../controllers/coffeeController");
const router = express.Router();

router.get("/", coffeeController.getListOfAllCoffee);
router.get("/add", coffeeController.showForms);
router.post("/add", coffeeController.createNewCoffee);
//router.get("/", coffeeController.sellCoffee);
router.get("/coffee/:id", coffeeController.seeCoffeeById);

module.exports = router;
