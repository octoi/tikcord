const pool = require("../setup");
const { userTable } = require("../constants");

module.exports = {
    checkUserExists: async (email) => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM ${userTable} WHERE email = $1`, [email]).then(data => {
                resolve(data)
            }).catch(e => {
                console.log(e.message)
                reject()
            })
        });
    }
}