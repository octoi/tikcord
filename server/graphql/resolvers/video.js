const checkAuth = require("../utils/checkAuth");
const { createVideo } = require("../../postgres/helper");

const Mutation = {

    createVideo: async (_, videoData, context) => {
        const user = checkAuth(context);

        videoData = {
            ...videoData,
            creator: user.id,
            createdAt: Date.now(),
            likeCount: 0,
            commentCount: 0,
        }

        const data = await createVideo(videoData);
        return {
            ...data,
            creator: user
        }

    }

}

const Query = {}

module.exports = { Mutation, Query }