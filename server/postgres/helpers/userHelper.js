const pool = require("../setup");
const { userTable } = require("../constants");

module.exports = {
    registerUser: (name, email, password, bio, profile) => {
        return new Promise((resolve, reject) => {
            pool.query(`INSERT INTO ${userTable} (name, email, password, bio, profile) VALUES ($1, $2, $3, $4, $5)`, [name, email, password, bio, profile]).then(data => {
                resolve({ name, email, password, bio, profile });
            }).catch(err => {
                console.log(err.message)
                process.exit(0)
            })
        });
    }
}