
module.exports = {
    Query: {
        async getRooms() {
            // get rooms from redis
        }
    },
    Mutation: {
        async createRoom(_, { host, name, description }) {
            // create room on redis
        }
    }
}