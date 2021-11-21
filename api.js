const fs = require("fs")
const http = require("http")
// const { reset } = require("nodemon")
// const { type } = require("os")

http.createServer((req,res) => {
    if(req.url == "/"){
        res.end("this sides is home pages")
    }else if(req.url == "/about"){
        res.end("this sides is about us pages")
    }else if(req.url == "/contact"){
        res.end("this side sis contact page")
    }else if(req.url == "/file"){
        fs.readFile("C:/Users/Ajay Sahni/Desktop/AjayGIt/node.js/node.js/file2.txt","utf-8",(err,data) => {
            // console.log(err)
            console.log(data)
        })
        res.end("hello world");
    }else{
        res.writeHead(404,{ "content-type": "text/html"});
        res.write("page not found!")
        res.end()
    }
})

.listen(8080,"127.0.0.1", () => {

    console.log("hello world")
})