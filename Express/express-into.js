import express from 'express';
const server = express();
server.get('/api', (req,res)=>{
    const data = req.query;
    console.log(data);
    res.send(`Hello Mr.${data.name} and your roll number is ${data.rollNo}`);
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is runing at ${PORT}`);
});
