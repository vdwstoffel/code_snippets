SELECT * FROM users;
SELECT * FROM posts;

SELECT * FROM users
WHERE username = 'stoffel';

SELECT username, password FROM users
WHERE username ILIKE '%stof%';