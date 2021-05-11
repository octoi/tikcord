const socketIo = require("socket.io");
const userSocketHelper = require("../redis/userSocketHelper");


function handler(socket, io) {
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

    socket.on("emit-update", email => {
        io.emit("update", email)
    })
}

function init(http) {
    const io = socketIo(http);

    io.on("connection", socket => {
        handler(socket, io);
    });
}

module.exports = init;