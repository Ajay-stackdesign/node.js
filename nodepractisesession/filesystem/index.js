const fs = require("fs")

fs.writeFileSync("text.txt","hello from full stack developer")
console.log("file is  created")
fs.readFileSync("text.txt","utf8")
console.log("file reading")
fs.appendFileSync("text.txt","soon becoming full stack developer")
console.log("file is appended");
const read = fs.readFileSync("text.txt","utf8")
console.log(read.toString())
fs.renameSync("text.txt","fullstack.txt")
fs.unlinkSync("fullstack.txt")
fs.rmdirSync("filesystem")
