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
    }
}