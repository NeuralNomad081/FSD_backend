const http = require ('http');
const fs = require ('fs/promises');

const server = http.createServer(async(req,res)=>{
    res.writeHead(200,{'Content-Type': 'application/json'});
    const filedata = await fs.readFile("./new.json", "utf-8")
    // const newData = users.map((user)=>{
    //     return user.name
    // });//will take data of name of each user in the users array and create a new array with just the names
    // let newData = ' ';
    // users.forEach((user)=>{
    //     newData+=`${user.name} `;
    // })
    res.end(filedata) // return the JSON data in form a string 
});
PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});
