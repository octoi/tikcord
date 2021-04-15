const { createRoomInDb, getRoomsFromDb } = require("../../redis/helper");
const shortid = require("shortid");

module.exports = {
    Query: {
        async getRooms() {
            const rooms = [];

            const roomsFromDb = await getRoomsFromDb();
            roomsFromDb.map(room => {
                room = JSON.parse(room);
                room.host = JSON.parse(room.host);
                rooms.push(room);
            });

            return rooms;
        }
    },
    Mutation: {
        async createRoom(_, { name, description, host }) {
            let roomData = {
                id: shortid.generate(),
                name,
                description,
                host: JSON.stringify(host)
            }

            await createRoomInDb(roomData);
            return { ...roomData, host };
        }
    }
}