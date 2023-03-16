const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("EXPRESS SERVER CONNECTED !");
});

app.get("/api/login/", (req, res) => {
  res.send("LOGIN PAGE");
});

app.listen(port, () => {
  console.log("-------------------------------");
  console.log(`🟢 [ ${port} ] PORT CONNECTED ! 🟢`);
  console.log("-------------------------------");
});