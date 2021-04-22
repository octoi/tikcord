const client = require("./index");

module.exports = {

    getVideosFromCache: () => {
        return new Promise((resolve, reject) => {
            client.lrange("videos", 0, -1, (err, reply) => {
                if(err){
                    console.log(err.message);
                    reject();
                }else{
                    const videos = [];

                    reply.forEach(video => {
                        video = JSON.parse(video);
                        videos.push(video);
                    });

                    resolve(videos);
                }
            });
        });
    },

    addVideoToCache: (data) => {
        return new Promise((resolve, reject) => {
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