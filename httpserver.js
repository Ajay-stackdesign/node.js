const http = require("http")

http.createServer((req,res) => {
    res.end("hello soon becoming full stack developer")
}).listen(8000,"127.0.0.1",() => {
    console.log("running the ports")
})