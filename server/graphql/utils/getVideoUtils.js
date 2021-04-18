const { getVideoLikes, getVideoComments } = require("../../postgres/helper")

module.exports = {
    getLikeCount: async (parent) => {
        delete parent.likecount;

        const likes = await getVideoLikes(parent.id);
        return likes.rows.length;
    },

    getCommentCount: async (parent) => {
        delete parent.commentcount;

        const comments = await getVideoComments(parent.id);
        return comments.rows.length;
    }
}