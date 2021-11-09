const fs = require("fs")

const data = {
    name: "nikki",
    age : 8 ,
    school : "saraswati vidaylaya",
    address : "airoli"
}

const dataPerson = JSON.stringify(data);
// console.log(dataPerson);

fs.writeFile("js.json", dataPerson ,(err,data) => {
    console.log(err)
    console.log("file is created")
});
fs.readFile("js.json","utf8",(err,data) => {
    console.log(data);

    const org = JSON.parse(dataPerson)
    console.log(org)
})