const http = require ('http');
const users = [
    
    {id: 1, name: "shashwat", email:"shashwatp011@gmail.com"},
    {id:2, name: "sarthak", email:'sarthak@gmail.com'},
    {id:3, name:'khushi', email:'khushi@gmail.com'}
]
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    // const newData = users.map((user)=>{
    //     return user.name
    // });//will take data of name of each user in the users array and create a new array with just the names
    let newData = ' ';
    users.forEach((user)=>{
        newData+=`${user.name} `;
    })
    res.end(newData) // return the JSON data in form a string 
});
PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});
