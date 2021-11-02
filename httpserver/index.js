// const http = require("http")

// const server = http.createServer((req,res) => {
//     res.end("hello your response is here");
// })
// server.listen(8000,"127.0.0.1",() => {
//     console.log("listening to port on 8000")
// })


// const { resolveSoa } = require("dns")
const http = require("http")
http.createServer((req,res) => {
    res.end("hello where are you");
}).listen(8000,"127.0.0.1" , () => {
    console.log("your port is working")
})