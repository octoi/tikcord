const { createRoomInDb, getRoomsFromDb } = require("../../redis/helper");
const { getAllData, insertData } = require("../../postgres/helper");
const shortid = require("shortid");

module.exports = {
    Query: {
        async getRooms() {
            // const rooms = [];

            // const roomsFromDb = await getRoomsFromDb();
            // roomsFromDb.map(room => {
            //     room = JSON.parse(room);
            //     room.host = JSON.parse(room.host);
            //     rooms.push(room);
            // });

            const rooms = await getAllData();
            console.log(rooms)
            return rooms;
        }
    },
    Mutation: {
        async createRoom(_, { data }) {
            let id = shortid.generate();

            // await createRoomInDb(roomData);
            const res = await insertData(id, data)
            return res;
        }
    }
}