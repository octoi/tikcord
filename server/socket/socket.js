
const userSocketHelper = require("../redis/userSocketHelper");

module.exports = (socket, io) => {

    socket.on("make-connection", (userData, callback) => {
        userSocketHelper.addUser(JSON.stringify(userData), socket.id).then(() => {
            socket.join("online");
            userSocketHelper.getOnlineUsers().then(data => {
                callback({ id: socket.id, onlineUsers: data })
            })
            io.to("online").emit("user-join", userData);
        })
    });

    socket.on("disconnect", async () => {
        userSocketHelper.removeOnlineUser(socket.id).then(() => {
            userSocketHelper.getOnlineUsers().then(users => {
                io.to("online").emit("user-left", users);
            })
        })
    });

}