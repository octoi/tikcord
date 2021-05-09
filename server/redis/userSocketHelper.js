const client = require("./index");

module.exports = {
    addUser: (userData, socketId) => {
        return new Promise((resolve, reject) => {
            client.HSET("online-users", socketId, userData, (err, data) => {
                if (err) reject(err);
                resolve(err);
            })
        });
    },

    getOnlineUsers: () => {
        return new Promise((resolve, reject) => {
            client.HGETALL("online-users", (err, data) => {
                if (err) reject(err);
                resolve(data)
            })
        });
    },


    removeOnlineUser: id => {
        return new Promise((resolve, reject) => {
            client.HDEL("online-users", id, (err) => {
                if (err) reject(err);
                resolve();
            })
        });
    }

}