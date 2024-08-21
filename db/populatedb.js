#!/usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const HOST = process.env.HOST;
const USER = process.env.USER;
const DB = process.env.DB;
const PASSWORD = process.env.PASSWORD;
const SQLPORT = process.env.SQLPORT;

const SQL = `
CREATE TABLE IF NOT EXISTS cars (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    availability BOOLEAN DEFAULT TRUE,
     );
INSERT INTO cars (name, brand, year)
VALUES
    ("Corse", "Opel", 2009),
    ("306", "Peugeot", 2016),
    ("ix35", "Hyundai", 2009),
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
