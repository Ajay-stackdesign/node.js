// const fs = require("fs")
// const { fileURLToPath } = require("url")

// fs.writeFileSync("nikki.txt","nikki is a good girl")

// fs.appendFileSync("nikki.txt","this a file which,,,name nikki on a next line")

// // const read = fs.readFileSync("nikki.txt")
// // orignal = read.toString()
// // console.log(orignal)

// // to rename a file

// // fs.renameSync("nikki.txt","hello.txt")



const fs = require("fs")

fs.writeFileSync("nikki.txt","namaste javascript")

fs.appendFileSync("nikki.txt","hello friends")

const read = fs.readFileSync("nikki.txt")
console.log(read)
console.log(read.toString())

fs.renameSync("nikki.txt","node.txt")


