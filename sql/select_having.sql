SELECT age, COUNT (*) FROM users
GROUP BY age
HAVING age < 30;