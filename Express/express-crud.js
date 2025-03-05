import express from 'express';;
const app = express();
const users = [{
    id: 1,
    name: "Shashwat",
    age:30
}]
const port = 3000;
app.get('/', (req,res)=>{
    res.send(users) //set header is not required in Express and it automatically parses
});
// app.use(experss.text());// express.text is a inbuilt middleware and we use this using app.use is a loader
app.use(express.json());//to handle JSON we need to use 
app.post('/', (req,res)=>{
    res.send("This is post request data from server")
    const body_data = req.body; //to parse the data from body we need a middle ware
    console.log(body_data);
});

app.post('/api/createUser', (req,res)=>{
    res.send("This is post request data from server")
    const {name, age} = req.body; //to parse the data from body we need a middle ware
    const newId = users.length > 0 ? users[users.length-1].id+1:1; 
    //if user len is more than 0 assign id +1 the last one else id = 1
    users.push({id: newId, name, age});
    console.log("New user is created successfully");
});

//this data is volatile and is removed when the server restarts
app.listen(port,()=>{
    console.log(`server is listening on this port${port}`);
});