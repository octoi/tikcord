const pool = require("../setup");
const { postTable, likeTable, commentTable, userTable } = require("../constants");

module.exports = {

    // get videos

    getAllPosts: () => {
        return new Promise((resolve, reject) => {

            pool.query(`SELECT * FROM ${postTable}`).then(posts => {
                resolve(posts);
            }).catch(err => {
                console.log(err.message);
                reject()
            })

        });
    },

    getUserPosts: (email) => {
        return new Promise((resolve, reject) => {

            pool.query(`SELECT * FROM ${postTable} WHERE email = $1`, [email]).then(data => {
                resolve(data);
            }).catch(err => {
                console.log(err.message);
                reject();
            })

        });
    },

    // create videos

    createPost: (postData) => {
        return new Promise((resolve, reject) => {
            const { creator, content, description, createdAt, likeCount, commentCount, email } = postData;

            pool.query(`INSERT INTO ${postTable} (creator, content, description, createdAt, likeCount, commentCount, email) VALUES ($1, $2, $3, $4, $5, $6, $7)`, [creator, content, description, createdAt, likeCount, commentCount, email]).then(() => {
                pool.query(`SELECT * FROM ${postTable} WHERE createdAt = $1`, [createdAt]).then(({ rows }) => {
                    resolve({ ...postData, id: rows[0].id });
                })
            }).catch(err => {
                console.log(err.message)
                reject();
            })

        });
    },


    // Post utils 

    getPostLikes: (id) => {
        return new Promise((resolve, reject) => {

            pool.query(`SELECT * FROM ${likeTable} WHERE post = $1`, [id]).then(data => {
                resolve(data)
            }).catch(err => {
                console.log(err.message)
                reject()
            })

        });
    },

    getPostComments: (id) => {
        return new Promise((resolve, reject) => {

            pool.query(`SELECT * FROM ${commentTable} WHERE post = $1`, [id]).then(data => {
                resolve(data);
            }).catch(err => {
                console.log(err.message);
                reject();
            })


        });
    },

    likeAPost: ({ creator, video: post }) => {
        return new Promise((resolve, reject) => {

            pool.query(`SELECT * FROM ${likeTable} WHERE post = $1 AND creator = $2`, [post, creator]).then(({ rows: data }) => {
                if (data.length > 0) {
                    pool.query(`DELETE FROM ${likeTable} WHERE post = $1 AND creator = $2`, [post, creator]).then(({ rows: data }) => {
                        resolve(data)
                    });
                } else {
                    pool.query(`INSERT INTO ${likeTable} (creator, post) VALUES ($1, $2)`, [creator, post]).then(({ rows: data }) => {
                        resolve(data);
                    });
                }
            }).catch(err => {
                console.log(err.message);
                reject();
            });

        });
    },

    createComment: ({ content, creator, post, createdAt }) => {
        return new Promise((resolve, reject) => {

            pool.query(`INSERT INTO ${commentTable} (content, creator, post, createdAt) VALUES ($1, $2, $3, $4) `, [content, creator, post, createdAt]).then(({ rows: data }) => {
                resolve(data)
            }).catch(err => {
                console.log(err.message);
                reject();
            });

        });
    },

    removeComment: (user, commentId) => {
        return new Promise((resolve, reject) => {

            pool.query(`SELECT * FROM ${commentTable} WHERE id = $1`, [commentId]).then(({ rows: comment }) => {
                comment = comment[0];
                comment.creator = JSON.parse(comment.creator);

                if (comment.creator.email != user.email) {
                    reject();
                    return;
                }

                pool.query(`DELETE FROM ${commentTable} WHERE id = $1`, [commentId]).then(data => {
                    resolve(data);
                }).catch(err => {
                    console.log(err.message);
                    reject();
                });

            }).catch(err => {
                console.log(err.message);
                reject();
            });

        });
    },

    // delete post

    deletePost: (id, user) => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM ${postTable} WHERE id = $1`, [id]).then(({ rows: post }) => {

                if (post[0].email == user.email) {
                    pool.query(`DELETE FROM ${postTable} WHERE id = $1`, [id]).then(() => {
                        resolve();
                    }).catch(err => {
                        console.log(err.message);
                        reject();
                    })
                } else {
                    reject()
                }

            }).catch(err => {
                console.log(err.message);
                reject();
            });

        });
    }
}