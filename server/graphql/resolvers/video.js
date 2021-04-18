const checkAuth = require("../utils/checkAuth");
const { createVideo, getAllVideos } = require("../../postgres/helper");
const videoHelper = require("../../postgres/helpers/videoHelper");

const Mutation = {

    createVideo: async (_, videoData, context) => {
        const user = checkAuth(context);

        videoData = {
            ...videoData,
            creator: JSON.stringify(user),
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

const Query = {

    getVideos: async () => {
        const videosRaw = await getAllVideos();
        const videos = [];

        videosRaw.rows.forEach(video => {
            videos.push({ ...video, creator: JSON.parse(video.creator) });
        });

        return videos;
    }

}

module.exports = { Mutation, Query }