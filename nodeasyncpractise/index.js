const fs = require("fs");

// fs.mkdir("aysnc",(err,data) => {
//     console.log(err)
// })
// fs.writeFile("aysnc/text.txt","hello world",(err,data) => {
//     console.log(err)
// })
// fs.appendFile("aysnc/text.txt","soon going to become web developer",(err,data) => {
//     console.log(err)
//     console.log("appending file")
// })
// const read = fs.readFile("aysnc/text.txt","utf8",(err,data) => {
//     console.log(data)
//     console.log("reading file")
// })
// fs.rename("aysnc/text.txt","aysnc/mybio.txt",(err,data) => {
//     console.log(err)
//     console.log("renaming the file")
//     console.log(data)
// })
// // fs.unlink("mybio.txt",(err,data) => {
// //     console.log(err)
// //     console.log(data)
// // });
fs.unlink("aysnc/mybio.txt",(err,data) => {
    console.log(err)
})
fs.rmdir("aysnc",(err,data) => {

    console.log(err)
})
