const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    res.send("hello world")
})

app.get("/about",(req,res) => {
    res.send("hello this side is about us page")
})

app.get("/contact",(req,res) => {
    res.send("hello this side is contact")
})
app.get("/temp",(req,res) => {
    res.send({
        id:1,
        name: "ajay"
    })
})

app.listen(8080,"127.0.0.1",() => {
    console.log("hello your response is here")
})

