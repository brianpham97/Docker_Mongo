const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

const { db } = require("./db.js");

const {getFriends, loadFriends} = require('./schema.js')

app.use(cors());
app.get("/", (req, res) => {
  res.send("docker is working mongo");
});

app.get("/friends", async (req, res) => {
  const friends = await getFriends()
  res.send(friends)
});

let loaded = false
app.post('/friends', async (req, res) => {
  if (loaded === false) {
    await loadFriends();
    loaded = true
    res.sendStatus(201);
  }
})

app.listen(port, () => {
  console.log(`listening now on port ${port}`);
});
