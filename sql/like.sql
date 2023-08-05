-- Exact Pattern Match
SELECT * FROM users
WHERE username LIKE 'Stof';

-- Use % for more than one pattern match
SELECT * FROM users
WHERE username LIKE '%Stof%';

-- Use _ for more than one pattern match
SELECT * FROM users
WHERE username LIKE 'Stof_';

-- Case Insensitive
SELECT * FROM users
WHERE username ILIKE '%stof%';