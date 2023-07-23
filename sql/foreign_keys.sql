CREATE TABLE platform (
    platform_id SERIAL PRIMARY KEY,
    platform_name VARCHAR(250),
    user_id INTEGER REFERENCES users(user_id)
);