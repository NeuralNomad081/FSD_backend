const http = require ('http')
const axios = require ('axios')
const server = http.createServer(async(req,res)=>{
    console.log('New Request Recived');
    res.writeHead(200, {'Content-Type': 'text/html'});
    const response = await axios.get("https://api.github.com/search/users?q=location:{ghaziabad}");
    const avatar = response.data.items;
    let frontdata = `<html><head></head><body>`
    avatar.forEach((avt) => {
        frontdata+=`<div><img src = "${avt.avatar_url}"></div>`
    });
    frontdata+=`</body></html>`
    res.end(frontdata);
});
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server is running at port : ${PORT}`);
});