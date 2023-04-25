UPDATE users
SET password='mail@mail.com'
WHERE username= 'christoff'
RETURNING *;