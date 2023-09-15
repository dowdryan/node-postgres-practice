const { Client } = require("pg");
let DB_URI;

if (process.env.NODE_ENV === "test") {
    DB_URI = "postgresql:///node_postgres_practice_test";
} else {
    DB_URI = 'postgresql://postgres:@localhost:5432/node_postgres_practice';
}

let db = new Client({
    connectionString: DB_URI
})

db.connect();
module.exports = db;