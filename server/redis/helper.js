const client = require("./index");

module.exports = {
    createRoom: (roomData) => {
        return new Promise((resolve, reject) => {
            client.lpush("rooms", roomData, (err, reply) => {
                if(err){
                    console.log('[ERROR] Cannot add room data to redis')
                    console.log(err.message);
                }else{
                    resolve(reply);
                }
            })
        });
    }
}