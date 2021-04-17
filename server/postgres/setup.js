require("dotenv").config()

const Pool = require("pg").Pool;
const createStuff = require("./createStuff");

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: 'tikcord',
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
})


// You can avoid the below block of code 
// If did'nt got any error on 'relation not found'
createStuff(pool);

module.exports = pool;