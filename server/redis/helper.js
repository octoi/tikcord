const client = require("./index");

module.exports = {

    getVideosFromCache: () => {
        return new Promise((resolve, reject) => {
            client.lrange("videos", 0, -1, (err, reply) => {
                if(err){
                    console.log(err.message);
                    reject();
                }else{
                    resolve(reply)
                }
            });
        });
    },

    addVideoToCache: (data) => {
        return new Promise((resolve, reject) => {
            data.creator = JSON.stringify(data.creator); // creator is an object it can't be stored in plain
            client.lpush("videos", JSON.stringify(data), (err, reply) => {
                if(err){
                    console.log(err.message);
                    reject();
                }else{
                    resolve(reply);
                }
            });
        });
    }
}