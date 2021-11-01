
const fs = require("fs");

const write = fs.writeFile("text.txt","hello world",((err,data) => {
    console.log(err)
    console.log("file is created")
}))

const read  = fs.readFile("text.txt","utf8",((err,data) =>{
    console.log(data)
}))