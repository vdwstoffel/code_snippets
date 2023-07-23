DELETE FROM users
WHERE username = 'stoffel'
RETURNING *;

-- This will delete everything from the table
DELETE FROM users;