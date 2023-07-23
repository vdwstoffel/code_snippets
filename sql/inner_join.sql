SELECT * FROM users
INNER JOIN platform
ON users.user_id = platform.user_id;