module.exports = (pool) => {
    pool.query('CREATE DATABASE tikcord');
    pool.query(`
        CREATE TABLE tikuser{
            id SERIAL PRIMARY KEY,
            name TEXT,
            email TEXT,
            password: TEXT,
            bio: TEXT,
        };
    `);
    pool.query(`
        CREATE TABLE tikvideo{
            id SERIAL PRIMARY KEY,
            creator: BIGINT REFERENCES tikuser(id),
            content: TEXT,
            description: TEXT,
            createdAt: TEXT,
        }
    `);
    pool.query(`
        CREATE TABLE tiklike{
            id SERIAL PRIMARY KEY,
            creator: BIGINT REFERENCES tikuser(id),
        }
    `)
    pool.query(`
        CREATE TABLE tikcomment{
            id SERIAL PRIMARY KEY,
            createdAt: TEXT,
            creator: BIGINT REFERENCES tikuser(id),
            content: TEXT,
        }
    `)
}