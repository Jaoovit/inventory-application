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

async function getCoffeeById(id) {
  const { rows } = await pool.query(`SELECT * FROM coffee WHERE id = '${id}'`);
  return rows;
}

async function deleteACoffeeById(id) {
  await pool.query(`DELETE FROM coffee WHERE id = ${id}`);
}

async function decreaseCoffeeQuantityById(id, quantity) {
  await pool.query(
    `UPDATE coffee SET quantity = ${quantity} WHERE id = '${id}'`
  );
}

module.exports = {
  getAllCoffee,
  getNewCoffeeFormsInfo,
  deleteACoffeeById,
  decreaseCoffeeQuantityById,
  getCoffeeById,
};
