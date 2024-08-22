const db = require("../db/queries");

async function getListOfAllCoffee(req, res) {
  const coffeeList = await db.getAllCoffee();
  console.log(coffeeList);
  res.render("index", { coffeeList: coffeeList });
}

function showForms(req, res) {
  res.render("forms");
}

async function createNewCoffee(req, res) {
  const coffeeName = req.body.coffeeName;
  const coffeeOrigin = req.body.coffeeOrigin;
  const coffeeWeight = req.body.coffeWeight;
  const coffeePrice = req.body.coffeePrice;
  const coffeeQuantity = req.body.coffeeQuantity;
  await db.getNewCoffeeFormsInfo(
    coffeeName,
    coffeeOrigin,
    coffeeWeight,
    coffeePrice,
    coffeeQuantity
  );
  res.redirect("/");
}

module.exports = { getListOfAllCoffee, showForms, createNewCoffee };
