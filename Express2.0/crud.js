const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); //middleware
const database = [
  {
    id: 1,
    name: "Shashwat",
    age: 21,
  },
  {
    id: 2,
    name: "Sarthak",
    age: 12,
  },
  {
    id: 3,
    name: "Khushi",
    age: 20,
  },
];
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
// CRUD Operations

// Create Operation
app.post("/users", (req, res) => {
  let user = {
    id: database.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  database.push(user);
  res.status(201).json(user);
});

//Read operation -> read all users
app.get("/getUsers", (req, res) => {
  res.json(database);
});

// Read one
app.get("/getUser/:id", (req, res) => {
  let userId = parseInt(req.params.id);
  const user = database.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Update Users
app.put("/update/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = database.findIndex((u) => u.id == userId);
  if (userIndex != -1) {
   database[userIndex] = { ...database[userIndex], ...req.body };
    res.json(database[userIndex])
  } else {
    res.status(404).json({message:"User not found"})
  }
});

//delete users

app.delete("/delete/:id", (req, res)=>{
    const userId = parseInt(req.params.id);
    const userIndex = database.findIndex((u)=>u.id === userId);
    if(userIndex != 1){
        const deletedUser = database.splice(userIndex,1)
        res.json(deletedUser)
    }
    else{
        res.status(404).json({message:"User not found"})
    }
})
