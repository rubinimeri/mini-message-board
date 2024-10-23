const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message TEXT,
  username TEXT,
  date_added DATE
);

INSERT INTO messages (message, username, date_added)
VALUES
  ('Hello World!', 'Rubin', NOW()::DATE),
  ('This is my message!', 'Charles', NOW()::DATE),
  ('All praise is due to Allah', 'Amando', NOW()::DATE)
;`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done!");
}

main();