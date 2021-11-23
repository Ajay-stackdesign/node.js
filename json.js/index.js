const { black } = require("chalk");
const fs = require("fs")

const car = {
    name: "BMW",
    model: "BMW6",
    year: 1997,
    color: "black"
}

const jsonData = JSON.stringify(car)
console.log(jsonData)

fs.writeFile("json.json",jsonData,(err,data) => {
    console.log(err)
    console.log(data)
})

fs.appendFile("json.json","hello namaste",(err,data) => {
    console.log(err)
    console.log(data)
})

const read = fs.readFile("json.json","utf-8",(err,data) => {
    console.log(data)
    console.log(err)
    const json = JSON.parse(jsonData)
    console.log(json)
})

// const json = JSON.parse(jsonData)
// console.log(json) 



