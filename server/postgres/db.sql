CREATE DATABASE tikcord;

CREATE TABLE tikuser(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password: TEXT,
    bio TEXT,
    profile TEXT,
);

CREATE TABLE tikpost(
    id SERIAL PRIMARY KEY,
    creator TEXT,
    email TEXT,
    content TEXT,
    description: TEXT,
    createdAt TEXT,
)

CREATE TABLE tiklike(
    id SERIAL PRIMARY KEY,
    creator TEXT,
    video TEXT
)

CREATE TABLE tikcomment(
    id SERIAL PRIMARY KEY,
    createdAt TEXT,
    creator TEXT,
    content TEXT,
    video TEXT
)
