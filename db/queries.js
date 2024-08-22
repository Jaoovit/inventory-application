const pool = require("./pool");

async function getAllCoffee() {
  const { rows } = await pool.query("SELECT * FROM coffee");
  return rows;
}

module.exports = {
  getAllCoffee,
};
