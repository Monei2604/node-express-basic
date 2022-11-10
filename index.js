const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const users = [
  {
    id: "a1",
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: "a2",
    firstName: "John",
    lastName: "Doe",
  },
];

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Get 1 user
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);
  if (!user) {
    res.send("User not found");
    return;
  }
  res.json(user);
});

// Add 1 user
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("Add user success");
});

// Update a user
app.patch("/users", (req, res) => {
  const user = req.body;
  const index = users.findIndex((u) => u.id === user.id);
  if(index >=0){
    users.splice(index, 1, user)
  }
  res.send("Update user success");
});

// Delete user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id === id);
  if (index >= 0) {
    users.splice(index, 1);
  }
  res.json("Delete user success");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
