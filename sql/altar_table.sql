-- Rename Table
ALTER TABLE users
RENAME TO new_users;

-- Rename COLUMN
ALTER TABLE new_users
RENAME COLUMN username TO new_username;

-- Drop COLUMN
ALTER TABLE new_users
DROP COLUMN IF EXISTS age;