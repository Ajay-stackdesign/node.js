const fs = require("fs")

const data = {
    name : "ajay",
    age : 23,
    surname : "sahani",
    school : "SDV"
}




const jsondata = JSON.stringify(data);

fs.writeFile("json1.json", jsondata, (err) => {
    console.log("done");
    console.log("file is created")
})

fs.readFile("json1.json" , "utf8", (err,data) => {
    console.log(data);
    const orgData = JSON.parse(jsondata)

    console.log(orgData)
})
