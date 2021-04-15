require("dotenv").config();
const redis = require("redis");

const redisUrl = process.env.REDIS;
const client = redisUrl ? redis.createClient({ url: redisUrl }) : redis.createClient();

client.on("connect", () => {
    console.log("[INFO] connected to redis");
})

client.on("error", (e) => {
    console.log("[ERROR] Redis server error")
    console.log(e.message)
    process.exit(0);
})

module.exports = client;