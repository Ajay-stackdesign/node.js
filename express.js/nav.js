const express = require("express")

const app = express()

app.get("/",(req,res) => {
    res.send("hello your response is send")
})

app.get("/about",(req,res) => {
    res.send("hello from the about us page")
})

app.get("/contact",(req,res) => {
    res.send("hello form the contact us page")
})

app.get("/temp",(req,res) => {
    res.send("hello")
})

app.listen(8080,"127.0.0.1",() => {
    console.log("hello your has been transfer")
})