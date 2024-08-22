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

async function decreaseQuantityById(req, res) {
  const coffeeId = req.params.id;
  const decrement = parseInt(req.body.coffeeSelling, 10);
  const coffee = await db.getCoffeeById(coffeeId);
  const coffeeQuantity = coffee[0].quantity;
  const quantity = coffeeQuantity - decrement;

  await db.decreaseCoffeeQuantityById(coffeeId, quantity);

  res.redirect("/");
}

async function seeCoffeeById(req, res) {
  const coffeeId = req.params.id;
  const coffee = await db.getCoffeeById(coffeeId);
  console.log(coffee[0].quantity);
  res.render("coffee", { coffee: coffee });
}

async function deleteCoffeeById(req, res) {
  const coffeeId = req.params.id;
  await db.deleteACoffeeById(coffeeId);
  res.redirect("/");
}

module.exports = {
  getListOfAllCoffee,
  showForms,
  createNewCoffee,
  decreaseQuantityById,
  seeCoffeeById,
  deleteCoffeeById,
};
