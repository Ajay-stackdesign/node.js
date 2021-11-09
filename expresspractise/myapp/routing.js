const express = require("express");

const app = express();

app.get("/",(req,res) => {
    res.write("<h1>hello from home</h1>")
    res.send()
})
app.get("/about",(req,res) => {
    res.status(200).send("hello from about us page")
})
app.get("/contact",(req,res) => {
    res.send("hello from contact us pages")
})
app.get("/temp",(req,res) => {
    res.send([
        {
            id: 1, 
            name: "ajay"
        }
    ])
})
app.listen(8080,"127.0.0.1", () => {
    console.log("your response is here ");
});



// the methods are identical when an object or array 
// is paased,but res.json() will also convert non-objects,
// sich as null and undefined,which are not valid JSON
