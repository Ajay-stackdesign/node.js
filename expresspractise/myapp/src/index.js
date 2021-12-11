const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const pathing = path.join(__dirname,"../public")//path for public folder
// console.log(__dirname)
const templatePath = path.join(__dirname,"../templates")//path for hbs folder
const partialPath = path.join(__dirname,"../templates/partials")

app.set("view engine","hbs");//hbs view engine
app.set("views",templatePath); //changing the folder in hbs 
// app.set()
//app.use(express.static(pathing));//static ways to add a data
hbs.registerPartials(partialPath);

app.get("/",(req,res) => {
    res.render('C:/Users/Ajay Sahni/Desktop/AjayGIt/node.js/node1.js/expresspractise/myapp/templates/views/index.hbs',{
        channelName : "ajay"
    });//dynamic way to add a data;
})
// C:\Users\Ajay Sahni\Desktop\AjayGIt\node.js\node1.js\expresspractise\myapp\templates\views\index.hbs

app.use(express.static(pathing));

app.get("/",(req,res) => {
    res.send("hello here is your home page")
})

app.get("/about",(req,res) => {
    res.render("C:/Users/Ajay Sahni/Desktop/AjayGIt/node.js/node1.js/expresspractise/myapp/templates/views/about.hbs")
})//dynamic ways to add a data
app.get("/contact",(req,res) => {
    res.render("C:/Users/Ajay Sahni/Desktop/AjayGIt/node.js/node1.js/expresspractise/myapp/templates/views/contact.hbs")
})

// app.get("/about",(req,res) => {
//     res.send("hello here is your about us page")
// })

// app.get("/contact",(req,res) => {
//     res.send("hello here is your contact page")
// })

app.get("/temp",(req,res) => {
    res.send({
        id: 1,
        name: "ajay"
    })
})

app.get("/about/*",(req,res) => {
    res.render("C:/Users/Ajay Sahni/Desktop/AjayGIt/node.js/node1.js/expresspractise/myapp/templates/views.404.hbs",{
        errorcomment: "opp this about us page could not not be found",
    })
})

app.get("*",(req,res) => {
    res.render("C:/Users/Ajay Sahni/Desktop/AjayGIt/node.js/node1.js/expresspractise/myapp/templates/views/404.hbs",{
        errorcomment: "page not found",
    })
})


app.listen(8080,"127.0.0.1",() => {
    console.log("listening your response on 8080 port")
});


