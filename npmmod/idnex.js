
const chalk = require("chalk")
const http = require("http")

http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/") {
        res.end("hello soon going to be placed in usa based company")
    }else if(req.url == "/about"){
        res.end("hello now i am at about us page")
    }else if(req.url == "/contact"){
        res.end("u can contact me after some time")
    }else{
        res.writeHead(404, {"content-type":"text/html"})
        res.write("<h1>404 error found!</h1>")
        res.end();
    }
}).listen(8000, "127.0.0.1", () => {
    console.log(chalk.bgGreen("hello world"))
})