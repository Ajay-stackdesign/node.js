const chalk = require("chalk")
const http = require("http")

http.createServer((req,res) => {
    if(req.url == "/"){
        res.end(("hello world"))
    }else if(req.url == "/contact"){
        res.write(("<h1>this side is contact us Page</h1>"))
        res.end()
    }else if (req.url == "/about"){
        res.write("<h2>this side is about us</h2>")
        res.end();
    }else{
        res.writeHead(404, {"content-type":"text/html"})
        res.write("<h1>page not found</h1>")
        res.end()
    }
})
.listen(8080,"127.0.0.1", () => {
    console.log(chalk.bgRed("nikki is yeddi"))
})