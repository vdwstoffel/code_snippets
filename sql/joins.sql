SELECT * FROM users as users
INNER JOIN posts as posts
ON users.user_id = posts.user_id;