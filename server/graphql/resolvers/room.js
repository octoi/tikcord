
module.exports = {
    Query: {
        getRooms = async () => {
            // get rooms from redis
        }
    },
    Mutation: {
        createRoom = async (_, { host, name, description }) => {
            // create room on redis
        }
    }
}