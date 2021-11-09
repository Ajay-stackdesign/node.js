// const http = require("http")

// http.createServer((req,res) => {
//     res.writeHead(200,{"content-type": "text/html"})
//     res.write("hello world i am coming soonn in the market")
//     res.end()
// })
// .listen(8000,"127.0.0.1",() => {
//     console.log("your response is created");
//     console.log("ok")
// });


const http = require("http")

http.createServer((req,res) => {
    res.writeHead(200, {"content-type" : "text/html"});
    res.write("hello world")
    res.end();
}).listen(8000,"127.0.0.1",() => {
    console.log("your response is here")
})



