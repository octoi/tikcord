const { getPostLikes, getPostComments } = require("../../postgres/helper")

module.exports = {
    getLikes: async (parent) => {
        const likes = await getPostLikes(parent.id);
        return likes.rows;
    },

    getCommentCount: async (parent) => {
        const comments = await getPostComments(parent.id);
        return comments.rows.length;
    }
}