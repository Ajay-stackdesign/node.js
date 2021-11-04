const fs = require("fs")
const person = {
    name: "ajay",
    school : "sdv",
    class : 6
}

const jsondata = JSON.stringify(person)
console.log(jsondata)


fs.writeFile("js.json",jsondata,(err,data) => {
    console.log(err)
})

fs.readFile("js.json","utf8",(err,data) => {
    console.log(err)
    // const original = JSON.parse(jsondata)
    // console.log(original)
})
const original = JSON.parse(jsondata)
console.log(original)
