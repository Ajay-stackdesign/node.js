// create a folder named it crud
// create  create a file in it named bio.txt and data into it
// 3: add more data into the file at the end of the existing 
// 4: read the data without getting the buffer data at file file encoding 
// 5: rename the file name to mybio.txt 
// 6: now delege both the file and the folder
// fs.mkdirSync("ajay")

const fs = require("fs")

// fs.mkdir("ajay",(err,data) => {
//     console.log(err)
// })
fs.writeFile("ajay/text.txt","hello world",(err,data) => {
    console.log(err)
})
fs.appendFile("ajay/text.txt","kaise ho",(err,data) => {
    console.log(err)
    console.log(data)
})
const read = fs.readFile("ajay/text.txt",(err,data) => {
    console.log(data.toString())
})

fs.rename("ajay/text.txt","ajay/bio.txt",(err,data) => {
    console.log(err)
    console.log(data)
})
fs.unlink("ajay/bio.txt",(err,data) => {
    console.log(data)
    console.log(err)
})
fs.rmdir("ajay",(err,data) => {
    console.log(err)
})