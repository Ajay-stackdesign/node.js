const http = require("http");
const fs = require("fs");

http.createServer((req,res) => {
    if(req.url == "/"){
        res.end("hello")
    }else if(req.url == "/about"){
        res.end("this is all about us page")
    }else if(req.url == "/contact"){
        res.end("this is contact page")
    }else if(req.url == "/userapi"){
        fs.readFile("C:/Users/Ajay Sahni/Desktop/AjayGIt/node.js/node1.js/event/event.js","utf8",(err,data) => {
            res.end(data);
            console.log(err)
            console.log(data)
        })
    }else{
        res.writeHead(404,{"content-type": "text/html"})
        res.write("page not found")
        res.end();
    }
})
.listen(8000,"127.0.0.1", () => {
    console.log("your response is working")
})