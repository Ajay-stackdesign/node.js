const express = require("express");
const app = express();
const path = require("path");

const pathing = path.join(__dirname,"../about")
// console.log(__dirname)
app.use(express.static(pathing));

app.get("/",(req,res) => {
    res.send("hello here is your home page")
})

app.get("/about",(req,res) => {
    res.send("hello here is your about us page")
})
app.get("/contact",(req,res) => {
    res.send("hello here is your contact page")
})
app.get("/temp",(req,res) => {
    res.send({
        id: 1,
        name: "ajay"
    })
})

app.listen(8080,"127.0.0.1",() => {
    console.log("listening your response on 8080 port")
});

