require("dotenv").config()

const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: 'tikcord',
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
})

module.exports = pool;