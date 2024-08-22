#!/usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const HOST = process.env.HOST;
const USER = process.env.USER;
const DB = process.env.DB;
const PASSWORD = process.env.PASSWORD;
const SQLPORT = process.env.SQLPORT;

const SQL = `
CREATE TABLE IF NOT EXISTS coffee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    origin VARCHAR(50) NOT NULL,
    weight VARCHAR(50) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    quantity INT NOT NULL
);

INSERT INTO coffee (name, origin, weight, price, quantity)
VALUES
    ('Coffee Quindio', 'Colombia', '250g', 14.40, 10),
    ('Coffee Bombe', 'Ethiopia', '1000g', 30.00, 5),
    ('Coffee Caparaó', 'Brazil', '250g', 12.00, 3);
`;

async function main() {
  console.log("Seending the database...");
  const client = new Client({
    connectionString: `postgresql://${USER}:${PASSWORD}@${HOST}:${SQLPORT}/${DB}`,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Table created and data inserted successfully");
  } catch (err) {
    console.error("Error executing query", err);
  } finally {
    await client.end();
  }
}

main();
