const express = require("express");
const app = express();

const birds = require("./controllers/birds");
// ...
app.use("/birds", birds);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});