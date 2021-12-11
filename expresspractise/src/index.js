
const chalk = require("chalk");
const express = require("express");
const app = express();
const path = require("path")
const port = 8000;
const hbs = require("hbs")

const staticPath = path.join(__dirname,"../public")

// app.use(express.static(staticPath))
app.set("view engine","hbs")

app.get("/", (req, res) => {
    // res.send("this side is home pages")
    res.render("C:/Users/Ajay Sahni/Desktop/AjayGIt/node.js/node.js/expresspractise/views/index.hbs",{
        channelName: "ajay"
    })
})
app.get("/about", (req, res) => {
    res.send("this sideis about pages ")
})
app.get("/contact", (req, res) => {
    res.send("this side is contact us pages")
})
app.get("/name", (req, res) => {
    res.send([
        {
            name: "ajay",
            working: "no",
            studying: "devops"
        },
        {
            name: "sahani",
            studying: "no",
            age: 22
        }
    ])
})

.listen(port, "127.0.0.1", () => {
    console.log(chalk.bgRed("your response has been send "))
})
