
const userSocketHelper = require("../redis/userSocketHelper");

module.exports = (socket, io) => {

    socket.on("make-connection", (userData, callback) => {
        userSocketHelper.addUser(JSON.stringify(userData), socket.id).then(() => {
            socket.join("online");
            userSocketHelper.getOnlineUsers().then(data => {
                callback({ id: socket.id, onlineUser: data })
            })
        })
    });

    socket.on("disconnect", () => {
        // disconnect user
    });

}