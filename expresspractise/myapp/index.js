const express = require("express")

const app = express();

app.get("/",(req,res) => {
    res.send("hello this side is home")
})

app.get("/about",(req,res) => {
    res.send("this sides is about us")
})

app.get("/contact",(req,res) => {
    res.send("this side is contact");
    console.log("hello")
})


.listen(8000,"127.0.0.1",() => {
    console.log("hello response is heres")
})