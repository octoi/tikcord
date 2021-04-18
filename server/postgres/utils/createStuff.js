module.exports = (pool) => {
    pool.query(`
        CREATE TABLE IF NOT EXISTS tikuser(
            id SERIAL PRIMARY KEY,
            name TEXT,
            email TEXT,
            password TEXT,
            bio TEXT,
            profile TEXT
        )
    `);
    pool.query(`
        CREATE TABLE IF NOT EXISTS tikvideo(
            id SERIAL PRIMARY KEY,
            creator TEXT,
            email TEXT,
            content TEXT,
            description TEXT,
            createdAt TEXT,
            likeCount INT,
            commentCount INT
        )
    `);
    pool.query(`
        CREATE TABLE IF NOT EXISTS tiklike(
            id SERIAL PRIMARY KEY,
            creator TEXT,
            video TEXT

        )
    `)
    pool.query(`
        CREATE TABLE IF NOT EXISTS tikcomment(
            id SERIAL PRIMARY KEY,
            createdAt TEXT,
            creator TEXT,
            content TEXT,
            video TEXT
        )
    `)
}