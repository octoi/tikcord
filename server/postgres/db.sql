CREATE DATABASE chatcord;

CREATE TABLE chatcord (
    ID SERIAL PRIMARY KEY,
    roomId TEXT,
    name TEXT,
    description TEXT,
    host TEXT /* JSON strigified text */
);