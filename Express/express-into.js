import express from 'express';
const server = express();
server.get('/api', (req,res)=>{
    try {
    //using object destructuing
    const {name , rollNo } = req.query; 
    res.send(`Hello Mr. ${name} and your roll number is ${rollNo}`);
    } catch (error) {
        console.log(error.message);    
    }
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is runing at ${PORT}`);
});
