const http = require ('http')
const axios = require ('axios')
const server = http.createServer(async(req,res)=>{
    console.log('New Request Recived');
    res.writeHead(200, {'Content-Type': 'text/html'});
    //using fetch
    // const response = await fetch ("https://dummyjson.com/products");
    // const data = await response.json();
    //using axios to fetch data
    const response =  await axios.get ("https://dummyjson.com/products");
    const products_data = response.data.products;
    let frontdata = `<html><head></head><body>`
    products_data.forEach((product) => {
        frontdata+=`<div><img src = "${product.thumbnail}"></div>`
    });
    frontdata+=`</body></html>`
    res.end(frontdata);
});
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server is running at port : ${PORT}`);
});