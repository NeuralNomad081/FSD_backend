const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
app.use(express.json()) //middle ware (baked in middleware to remove undefined )
const user =[{
    name: 'Shashwat',
    age : 20
}];
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "home.html"));
})
app.get('/about',(req, res)=>{
    res.sendFile(path.join(__dirname, "about.html"));
})
app.get('/contact',(req, res)=>{
    res.sendFile(path.join(__dirname, "contact.html"));
})

app.post('/api/user', (req,res)=>{
    console.log("The body is : ", req.body);
    res.json({})
})

app.listen(port, ()=>{
    console.log(`app is running at: ${port}`);

})