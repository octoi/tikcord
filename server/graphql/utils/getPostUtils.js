const { getPostLikes, getPostComments } = require("../../postgres/helper")

module.exports = {
    getLikes: async (id) => {
        const likes = await getPostLikes(id);
        return likes.rows;
    },

    getCommentCount: async (parent) => {
        const comments = await getPostComments(parent.id);
        return comments.rows.length;
    }
}