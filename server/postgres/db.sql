CREATE DATABASE chatcord;

CREATE TABLE chatcord (
    ID SERIAL PRIMARY KEY,
    roomId TEXT,
    roomData TEXT /* JSON strigified data */
);