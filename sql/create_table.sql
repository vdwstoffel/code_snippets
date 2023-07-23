CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(250) UNIQUE,
    age INT
);

