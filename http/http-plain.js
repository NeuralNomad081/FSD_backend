const http = require ('http');
const  fs = require("fs/promises")




const server = http.createServer(async (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World this is shashwat</h1>');
    const data = await fs.readFile("./home.html", "utf-8");
    res.end(data);
});
PORT = 3000
server.listen(PORT,()=>{
    console.log(`Server is now running at port ${PORT}`);
})