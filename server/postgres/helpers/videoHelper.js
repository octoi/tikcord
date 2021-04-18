const pool = require("../setup");
const { videoTable, likeTable, commentTable } = require("../constants");

module.exports = {
    getAllVideos: () => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM tikvideo`).then(videos => {
                resolve(videos);
            }).catch(err => {
                console.log(err.message);
                reject()
            })
        });
    },

    createVideo: (videoData) => {
        return new Promise((resolve, reject) => {
            const { creator, content, description, createdAt, likeCount, commentCount } = videoData;

            pool.query(`INSERT INTO ${videoTable} (creator, content, description, createdAt, likeCount, commentCount) VALUES ($1, $2, $3, $4, $5, $6)`, [creator, content, description, createdAt, likeCount, commentCount]).then(() => {
                pool.query(`SELECT * FROM ${videoTable} WHERE createdAt = $1`, [createdAt]).then(({ rows }) => {
                    resolve({ ...videoData, id: rows[0].id });
                })
            }).catch(err => {
                console.log(err.message)
                reject();
            })
        });
    },

    // get video utils 

    getVideoLikes: (id) => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM ${likeTable} WHERE video = $1`, [id]).then(data => {
                resolve(data)
            }).catch(err => {
                console.log(err.message)
                reject()
            })
        });
    },

    getVideoComments: (id) => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM ${commentTable} WHERE video = $1`, [id]).then(data => {
                resolve(data);
            }).catch(err => {
                console.log(err.message);
                reject();
            })
        });
    }
}