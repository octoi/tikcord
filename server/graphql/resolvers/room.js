const { createRoomInDb, getRoomsFromDb } = require("../../redis/helper");

module.exports = {
    Query: {
        async getRooms() {
            const rooms = [];

            const roomsFromDb = await getRoomsFromDb();
            roomsFromDb.map(room => rooms.push(JSON.parse(room)));

            return rooms;
        }
    },
    Mutation: {
        async createRoom(_, roomData) {
            await createRoomInDb(roomData);
            return roomData;
        }
    }
}