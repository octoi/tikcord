const pool = require("../setup");
const { videoTable, likeTable, commentTable, userTable } = require("../constants");

module.exports = {

    // get videos

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

    getUserVideos: (email) => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM ${videoTable} WHERE email = $1`, [email]).then(data => {
                resolve(data);
            }).catch(err => {
                console.log(err.message);
                reject();
            })
        });
    },

    // create videos

    createVideo: (videoData) => {
        return new Promise((resolve, reject) => {
            const { creator, content, description, createdAt, likeCount, commentCount, email } = videoData;

            pool.query(`INSERT INTO ${videoTable} (creator, content, description, createdAt, likeCount, commentCount, email) VALUES ($1, $2, $3, $4, $5, $6, $7)`, [creator, content, description, createdAt, likeCount, commentCount, email]).then(() => {
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
    },
}