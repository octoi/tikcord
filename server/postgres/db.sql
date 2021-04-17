CREATE DATABASE tikcord;

CREATE TABLE tikuser{
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password: TEXT,
    bio: TEXT,
};

CREATE TABLE tikvideo{
    id SERIAL PRIMARY KEY,
    creator: BIGINT REFERENCES tikuser(id),
    content: TEXT,
    description: TEXT,
    createdAt: TEXT,
}

CREATE TABLE tiklike{
    id SERIAL PRIMARY KEY,
    creator: BIGINT REFERENCES tikuser(id),
}

CREATE TABLE tikcomment{
    id SERIAL PRIMARY KEY,
    createdAt: TEXT,
    creator: BIGINT REFERENCES tikuser(id),
    content: TEXT,
}
