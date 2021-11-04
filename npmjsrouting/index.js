const http = require("http")
const fs =require("fs")

http.createServer((req,res) => {
    if(req.url == "/"){
        res.write("hello this side is home pages");
        res.end()
    }else if (req.url == "/about"){
        res.write("hello this side is about us page");
        res.end()
    }else if(req.url == "/contact"){
        res.write("hello i am from contact pages");
        res.end();
    }else if(req.url == "/userapi"){
        fs.readFile("C:/Users/Ajay Sahni/Desktop/AjayGIt/node.js/node1.js/npmjsrouting/userapi.json","utf8",(err,data) => {
            console.log(data)
            console.log(err)
        });
        res.end(data)
    }else{
        res.end("404 error")
    }
}).listen(8000,"127.0.0.1",() => {
    console.log("listening to the port of 8000");
})