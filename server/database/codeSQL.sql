CREATE DATABASE taskdb

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    lastname VARCHAR(255),
    secondsurname VARCHAR(255),
    department VARCHAR(255),
)


