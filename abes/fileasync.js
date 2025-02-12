const fs = require("fs/promises"); //importing the file system module with promises(fastest)
const write= async ()=>{
    data = "this is my new world"
    await fs.writeFile("./data1.txt", data, "utf-8");
    console.log(data);
}
const read =async()=>{
    const data = await fs.readFile("./data.txt", "utf-8");
    console.log (data);
}

write();
read();
console.log("first");
console.log("2");
console.log("3");
console.log("4");