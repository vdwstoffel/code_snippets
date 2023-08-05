CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, -- Serial is auto increment
    username VARCHAR(250) UNIQUE,
    age INT
);

