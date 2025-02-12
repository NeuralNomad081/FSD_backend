const http = require ('http');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World this is shashwat</h1>');
    res.end();
});
PORT = 3000
server.listen(PORT,()=>{
    console.log(`Server is now running at port ${PORT}`);
})