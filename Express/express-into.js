import express from 'express';
const server = express();
server.get('/api', (req,res)=>{
    //using object destructuing
    const {name = "Jhon Doe", rollNo = 100} = req.query; //we can also use by default values
    res.send(`Hello Mr. ${name} and your roll number is ${rollNo}`);
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is runing at ${PORT}`);
});
