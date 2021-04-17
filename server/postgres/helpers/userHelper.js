const pool = require("../setup");
const { userTable } = require("../constants");

module.exports = {
    registerUser: (name, email, password) => {
        return new Promise((resolve, reject) => {
            pool.query(`INSERT INTO ${userTable} (name, email, password) VALUES ($1, $2, $3)`, [name, email, password]).then(data => {
                resolve(data.fields);
            }).catch(err => {
                console.log(err.message)
                process.exit(0)
            })
        });
    }
}