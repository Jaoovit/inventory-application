require("dotenv").config();

const { Pool } = require("pg");

const HOST = process.env.HOST;
const USER = process.env.USER;
const DB = process.env.DB;
const PASSWORD = process.env.PASSWORD;
const SQLPORT = process.env.SQLPORT;

const pool = new Pool({
  host: HOST,
  user: USER,
  database: DB,
  password: PASSWORD,
  port: SQLPORT,
});

module.exports = pool;
