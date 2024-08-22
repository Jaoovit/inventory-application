const db = require("../db/queries");

async function getListOfAllCoffee(req, res) {
  const coffeeList = await db.getAllCoffee();
  console.log(coffeeList);
  res.render("index", { coffeeList: coffeeList });
}

function showForms(req, res) {
  res.render("forms");
}

module.exports = { getListOfAllCoffee, showForms };
