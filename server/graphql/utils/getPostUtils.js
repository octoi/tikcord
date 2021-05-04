const { getPostLikes, getPostComments } = require("../../postgres/helper")

module.exports = {
    getLikes: async (id) => {
        const likes = await getPostLikes(id);
        return likes.rows;
    },

    getComments: async (id) => {
        const comments = await getPostComments(id);
        return comments.rows;
    }
}