const fs = require("fs")

fs.writeFile("text.txt","i have to complete this till last of november)" , (err,data) => {
    console.log("file is created")
    console.log(err)
    console.log(data)
}) 
fs.appendFile("text.txt","hello nidhi what u are doing",((err,data) => {
    console.log("file is completed")
    console.log(err)
}))

fs.readFile("text.txt","UTF-8",((err,data) => {
    console.log(data)
}))