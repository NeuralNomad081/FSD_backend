const fs = require("fs"); // importing the file system module

function main() {
    const data = fs.readFileSync("data.txt", {
        encoding: "utf8",
    }); // reading the file synchronously and giving the options argument to specify the encoding
    console.log(data); // without encoding given above, it will return a buffer object and we would need to convert it to string
    
    // const data = fs.readFileSync("data.txt");
    // console.log(data.toString());
    
    // it will create the file if it doesn't exist
    fs.writeFileSync("data1.txt", data + " added some text"); // writing to a file synchronously
    
    // appending data to a file
    fs.appendFileSync("data1.txt", data + "\nappended some text");
    
    // renaming a file
    fs.renameSync("data1.txt", "data2.txt");
    
    // deleting a file
    // fs.unlinkSync("data2.txt");
    
    // checking if a file exists
    if (fs.existsSync("data2.txt")) {
        console.log("data2.txt exists");
    } else {
        console.log("data2.txt does not exist");
    }
    
    // checking if a file contains a specific string and replacing it
    if (data.match("Hello")) {
        console.log("Hello is present in data.txt");
        const changedData = data.replace("Hello", "Hi");
        fs.writeFileSync("data.txt", changedData);
    } else {
        console.log("Hello is not present in data.txt");
    }
}

// creating and exporting a function
function readDataFromFile(fileName) {
    return fs.readFileSync(fileName, {
        encoding: "utf8",
    });
}

module.exports = { readDataFromFile };

// calling the main function only if the file is run directly not when it is imported somewhere
if (require.main === module) {
    main();
}