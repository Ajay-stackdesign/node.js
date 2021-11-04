// const events = require("events")

// const eventEmitter = new events.EventEmitter()

// eventEmitter.on("checkName", () => {
//     console.log("such a great doctor")
// })


// eventEmitter.emit("checkName") 

// const event = require("events")

// const events = new event.EventEmitter();

// events.on("checkMyName" , () => {
//     console.log("my name is ajay")
// })


// events.on("checkMyName", () => {
//     console.log("my name is ajay sahani");
// })


// events.on("checkMyName", () => {
//     console.log("my name is geeta sahani")
// })


// events.emit("checkMyName")


// parameters passing

const events = require("events")

const event = new events.EventEmitter();



event.on("checkMyName",(sc,ss) => {
    console.log("my name is ajay");
    console.log(`my status code is ${sc} and satisfied is ${ss}`);
})

event.emit("checkMyName", 200,"ok");