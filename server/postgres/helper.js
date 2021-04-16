const pool = require("./setup");

module.exports = {
    getAllData: () => {
       return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM chatcord').then(({ rows: data }) => {
                resolve(data);
            }).catch(e => {
                console.log(e.message)
            });
       }) 
    },

    insertData: (id, roomData) => {
        pool.query('INSERT INTO chatcord (roomid, roomdata) VALUES ($1, $2)', [id, roomData]).then(data => {
           return({ id, roomData }); 
        }).catch(e => {
            console.log(e.message);
            process.exit(0)
        });
    },
}