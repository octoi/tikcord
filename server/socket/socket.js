module.exports = (socket) => {

    socket.on("make-connection", (userData, callback) => {
        socket.join("post-connection");
        // add user 
        callback(socket.id)
    });

    socket.on("disconnect", () => {
        // disconnect user         
    });

}