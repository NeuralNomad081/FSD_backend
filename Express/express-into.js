import express from 'express';
const server = express();
server.get('/api', (req,res)=>{
    try {
    //using object destructuing
    const {name , rollNo } = req.query; 
    if (!name){
        // res.send({
        //     status:404, message : "Name is required"
        // });
        //or
        res.status(404).send("Please give a name")
    }
    else{
        res.send(`Hello Mr. ${name} your roll number is ${rollNo}`);
        // correct url : http://localhost:3000/api?name=shashwat&rollNo=57
    }
    } catch (error) {
        console.log(error.message);    
    }
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is runing at ${PORT}`);
});
