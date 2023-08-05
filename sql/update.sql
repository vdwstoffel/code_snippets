UPDATE users
SET username = 'stoffel_updated'
WHERE username = 'Stoffel'
RETURNING *; -- See output