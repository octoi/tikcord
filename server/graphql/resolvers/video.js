const checkAuth = require("../utils/checkAuth");
const { createVideo, getAllVideos, getUserVideos, deleteVideo: deleteUserVideo, likeAVideo } = require("../../postgres/helper");

const Mutation = {

    createVideo: async (_, videoData, context) => {
        const user = checkAuth(context);

        videoData = {
            ...videoData,
            creator: JSON.stringify(user),
            email: user.email,
            createdAt: Date.now(),
            likeCount: 0,
            commentCount: 0,
        }

        const data = await createVideo(videoData);
        return {
            ...data,
            creator: user
        }

    },

    deleteVideo: async (_, { id }, context) => {
        const user = checkAuth(context);

        await deleteUserVideo(id, user);
        
        return "deleted";

    },

    likeVideo: async (_, { video }, context) => {
        const user = checkAuth(context);

        const like = {
            creator: user,
            video
        }

        await likeAVideo(like);
        return like;

    },

    commentVideo: async (_, { video, content }, context) => {
        const user = checkAuth(context);

        const comment = {
            createdAt: Date.now(),
            creator: user,
            content: content,
            video: video,
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

    getUserVideo: async (_, { email }) => {
        const videosRaw = await getUserVideos(email);
        const videos = [];

        videosRaw.rows.forEach(video => {
            videos.push({ ...video, creator: JSON.parse(video.creator) });
        });

        return videos;
    }

}

module.exports = { Mutation, Query }