const http = require ('http');
const fs = require ('fs/promises');
const server = http.createServer(async(req, res)=>{
    if (req.url == '/'){
        res.writeHead(200, {'content-type':'application/json'})
        const filedata = await fs.readFile('./users.json', 'utf-8');
        res.end(filedata)
    }
    else if(req.url == '/home'){
        res.writeHead(200, {'content-type':'text/html'})
        const home  = await fs.readFile('./home.html','utf-8' )
        res.end(home)
    }
    else{
        res.writeHead(200,{'content-type':'text/html'} )
        const error = await fs.readFile('./error.html', 'utf-8')
        res.end(error)
    }
})
PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});