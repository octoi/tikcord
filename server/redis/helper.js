const client = require("./index");

module.exports = {
    getRoomsFromDb: () => {
        return new Promise((resolve, reject) => {
            client.lrange("rooms", 0, -1, (err, reply)=>{
                if(err){
                    console.log('[ERROR] Cannot fetch rooms from redis')
                    console.log(err.message);
                }else{
                    resolve(reply);
                }
            })
        });
    },

    createRoomInDb: (roomData) => {
        return new Promise((resolve, reject) => {
            client.lpush("rooms", JSON.stringify(roomData), (err, reply) => {
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