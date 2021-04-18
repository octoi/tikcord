const checkAuth = require("../utils/checkAuth");
const { createVideo, getAllVideos, getUserVideos } = require("../../postgres/helper");

const Mutation = {

    createVideo: async (_, videoData, context) => {
        const userData = checkAuth(context);

        videoData = {
            ...videoData,
            creator: JSON.stringify(userData),
            email: userData.email,
            createdAt: Date.now(),
            likeCount: 0,
            commentCount: 0,
        }

        const data = await createVideo(videoData);
        return {
            ...data,
            creator: userData
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
    },

    getUserVideo: async (_, { user }) => {
        const videosRaw = await getUserVideos(user);
        const videos = [];

        videosRaw.rows.forEach(video => {
            videos.push({ ...video, creator: JSON.parse(video.creator) });
        });

        return videos;
    }

}

module.exports = { Mutation, Query }