require("dotenv").config();

const { Pool } = require("pg");

const HOST = process.env.HOST;
const USER = process.env.USER;
const DB = process.env.DB;
const PASSWORD = process.env.PASSWORD;
const SQLPORT = process.env.SQLPORT;

module.exports = new Pool({
  host: HOST,
  user: USER,
  database: DB,
  password: PASSWORD,
  port: SQLPORT,
});
