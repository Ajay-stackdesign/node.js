const fs = require("fs");

const write = fs.writeFile("text.txt","hello world",((err,data) => {
    console.log(err)
    console.log("file is created")
}))