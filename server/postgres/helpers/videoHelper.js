const pool = require("../setup");
const { videoTable } = require("../constants");

module.exports = {
    createVideo: (videoData) => {
        return new Promise((resolve, reject) => {
            const { creator, content, description, createdAt, likeCount, commentCount } = videoData;

            pool.query(`INSERT INTO ${videoTable} (creator, content, description, createdAt, likeCount, commentCount) VALUES ($1, $2, $3, $4, $5, $6)`, [creator, content, description, createdAt, likeCount, commentCount]).then((data) => {
                resolve(videoData)
            }).catch(err => {
                console.log(err.message)
                reject();
            })
        });
    }
}