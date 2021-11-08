// // // crud 1: create 2: read 3: update 4: delete

// // // create a folder named it crud
// // // create  create a file in it named bio.txt and data into it
// // // 3: add more data into the file at the end of the existing 
// // // 4: read the data without getting the buffer data at file file encoding 
// // // 5: rename the file name to mybio.txt 
// // // 6: now delege both the file and the folder

// // const fs = require("fs")
// // fs.writeFileSync("bio.txt","hello namste")
// // fs.appendFileSync("bio.txt","kais eho")

// // const read = fs.readFileSync("bio.txt")
// // console.log(read)
// // console.log(read.toString())

// // fs.renameSync("bio.txt","mybio.txt")

// // fs.unlinkSync("crud.js")
// // fs.unlinkSync("mybio.txt")

// const fs = require("fs")

// fs.mkdirSync("ajay")
// fs.writeFileSync("text.txt","hello world how are you")
// fs.appendFileSync("text.txt","i have to complete till last week of november")
// const read = fs.readFileSync("text.txt","utf8")
// console.log(read.toString())
// // fs.renameSync("text.txt","mytext.txt")

const fs = require("fs");

fs.mkdir("ajay",((err) => {
    console.log("folder is creaated")
}))

fs.writeFile("text.txt","hello vedant sahani",((err,data) => {
    console.log("file is created")
    console.log(err)
}))


fs.appendFile("text.txt","what going on",((err,data) => {
    console.log("data is added")
    console.log(err)
    console.log(data)
}))

const read = fs.readFile("text.txt","utf8",((err,data) => {
    console.log(err)
    console.log(data)
}))

fs.rename("text.txt","mytext..txt",((err,data) => {
    console.log(data)
    console.log(err)
}))
fs.unlink("mytext..txt",((err,data) => {
    console.log(err)
}))

fs.rmdir("ajay",((err,data) => {
    console.log(err)
    console.log(data)
}))



