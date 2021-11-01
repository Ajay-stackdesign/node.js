// const fs = require("fs")

// crud 1: create 2: read 3: update 4: delete

// create a folder named it crud
// create  create a file in it named bio.txt and data into it
// 3: add more data into the file at the end of the existing 
// 4: read the data without getting the buffer data at file file encoding 
// 5: rename the file name to mybio.txt 
// 6: now delege both the file and the folder
// fs.mkdirSync("ajay")
 
// fs.writeFileSync("ajay/bio.txt","hello world  how are you")
// fs.appendFileSync("ajay/bio.txt","soon ia m going to be a full stack developer my last date is last week of november")
// // 😍🍰🎂🍷🍭🍕🥝🍓🍒
// const read = fs.readFileSync("ajay/bio.txt","utf8")
// console.log(read)
// console.log(read.toString())

// fs.renameSync("ajay/bio.txt","ajay/mybio.txt") 

// fs.unlinkSync("ajay/mybio.txt") // deleting the file
// fs.rmdirSync("ajay") //removing the folder.
const fs = require("fs")

// fs.mkdirSync("ajay")
// fs.writeFileSync("text.txt","hello world how are you")
// fs.appendFileSync("text.txt","i have to complete till last week of november")
// const read = fs.readFileSync("text.txt","utf8")
// console.log(read.toString())

// fs.renameSync("text.txt","mytext.txt")
// fs.unlinkSync("mytext.txt")
fs.rmdirSync("ajay")
