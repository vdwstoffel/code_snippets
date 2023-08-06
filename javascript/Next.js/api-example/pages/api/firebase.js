import axios from "axios";
require("dotenv").config({ path: "../../../.env" });

export default async function handler(req, res) {
  const url = process.env["FIREBASE"];

  // check if the correct method is used
  if (req.method === "POST") {
    await axios.post(url, req.body);
    res.end();
  }
}
