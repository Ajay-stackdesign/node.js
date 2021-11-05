// const express = require('express')
// const app = express()



const express = require("express")
const app = express();


app.get("/",(req,res) => {
    res.send("hello your express respose is send1")
})

app.get("/about",(req,res) => {
    res.send("hello express")
})

app.listen(8000,"127.0.0.1",() => {
    console.log("hello your response is end 1 ")
})






// the callback function has 2 parameters,request(req) and response(res).
// the request object(req) represent the http request and has properties for the request
// quert string,parameters,body
// http headers,etc.

// similarly,the resposnse object represents the hhtp response  
// that the express app sends when it receives an http request.




// API
// Get - read data 
// post - create data
// put - update data
// delete - delete data