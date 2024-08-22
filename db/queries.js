const pool = require("./pool");

async function getAllCoffee() {
  const { rows } = await pool.query("SELECT * FROM coffee");
  return rows;
}

async function getNewCoffeeFormsInfo(name, origin, weight, price, quantity) {
  const { rows } = await pool.query(
    `INSERT INTO coffee (name, origin, weight, price, quantity)
     VALUES 
     ('${name}', '${origin}', '${weight}', ${price}, ${quantity})`
  );
  return rows;
}

module.exports = {
  getAllCoffee,
  getNewCoffeeFormsInfo,
};
