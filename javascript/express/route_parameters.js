const express = require("express");
const app = express();

// http://localhost:3000/users/stoffel/books/mtg
app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params); // {"userId":"stoffel","bookId":"mtg"}
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
