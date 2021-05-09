module.exports = (socket) => {

    socket.on("make-connection", () => socket.join("post-connection"));

    socket.on("disconnect", () => {
        // disconnect user
    });

}