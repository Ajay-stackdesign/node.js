const fs = require("fs")

// fs.writeFileSync("text.txt","hello what going on");
// console.log("file is created")
// fs.appendFileSync("text.txt","soon going to becoming full stack developer");
// console.log("file is created");
// const read = fs.readFileSync("text.txt","utf8");
// console.log(read)
// // fs.mkdirSync("filesytem")
// fs.renameSync("text.txt","read.txt")
// fs.mkdirSync("filesystem");
// console.log("file is created")
// fs.writeFileSync("text.txt","hello from ajay");
// console.log("file is created");
// fs.mkdirSync("folder")
fs.writeFileSync("folder/text.txt","hello")
console.log("written a file")
fs.appendFileSync("folder/text.txt","soon becoming web developer")
console.log("file is appended")
const read = fs.readFileSync("folder/text.txt","utf8")
console.log(read)
fs.renameSync("folder/text.txt","main.txt")
console.log("file is renamed")
fs.unlinkSync("main.txt")
fs.rmdirSync("folder")  


