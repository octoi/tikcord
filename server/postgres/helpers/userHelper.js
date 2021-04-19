const pool = require("../setup");
const { userTable } = require("../constants");
const { checkUserExists } = require("../utils/check");

module.exports = {
    registerUser: (name, email, password, bio, profile) => {
        return new Promise((resolve, reject) => {
            checkUserExists(email).then(data => {
                if(data.rows.length == 0){

                    pool.query(`INSERT INTO ${userTable} (name, email, password, bio, profile) VALUES ($1, $2, $3, $4, $5)`, [name, email, password, bio, profile]).then(data => {
                        resolve({ name, email, password, bio, profile });
                    }).catch(err => {
                        console.log(err.message)
                        reject(); 
                    })

                }else{
                    reject();
                }
            })
        });
    },

    updateUserData: (name, password, email, bio, profile) => {
        return new Promise((resolve, reject) =>  {
            pool.query(`UPDATE ${userTable} SET name = $1, password = $2, bio = $3, profile = $4 WHERE email = $5`, [name, password, bio, profile, email]).then(data => {
                console.log(data)
                resolve({ name, email, password, bio, profile })
            }).catch(err => {
                console.log(err.message)
                reject(); 
            });
        });
    }
}