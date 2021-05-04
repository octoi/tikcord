const client = require("./index");

module.exports = {

    getPostsFromCache: () => {
        return new Promise((resolve, reject) => {
            client.lrange("posts", 0, -1, (err, reply) => {
                if (err) {
                    console.log(err.message);
                    reject();
                } else {
                    const posts = [];

                    reply.forEach(post => {
                        post = JSON.parse(post);
                        posts.push(post);
                    });

                    resolve(posts);
                }
            });
        });
    },

    addPostToCache: (data) => {
        return new Promise((resolve, reject) => {
            client.lpush("posts", JSON.stringify(data), (err, reply) => {
                if (err) {
                    console.log(err.message);
                    reject();
                } else {
                    resolve(reply);
                }
            });
        });
    },

    deleteAPost: (id) => {
        return new Promise((resolve, reject) => {

            module.exports.getPostsFromCache().then(posts => {

                posts = posts.filter(post => post.id != id)
                client.DEL("posts", (err) => {
                    if (err) {
                        console.log(err.message)
                        reject();
                    } else {
                        posts.forEach(async post => {
                            await module.exports.addPostToCache(post);
                        });

                        resolve();
                    }
                })

            })

        });
    }

}