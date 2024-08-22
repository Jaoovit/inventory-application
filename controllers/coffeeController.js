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
  const coffeeWeight = req.body.coffeeWeight;
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
/*
async function sellCoffee(req, res) {
  const coffeeId = req.params.id;
  const coffeeQuantity = req.params.quantity - 1;
  await db.decreaseCoffeQuantityById(coffeeId, coffeeQuantity);
  console.log(req.params.id);
  console.log(req.params.quantity);
}
*/

async function seeCoffeeById(req, res) {
  const coffeeId = req.params.id;
  const coffee = await db.getCoffeeById(coffeeId);
  res.render("coffee", { coffee: coffee });
}

module.exports = {
  getListOfAllCoffee,
  showForms,
  createNewCoffee,
  /*sellCoffee*/
  seeCoffeeById,
};
