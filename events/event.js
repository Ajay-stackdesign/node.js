// const event = require("events")

// const eventEmitter = new event.EventEmitter();

// eventEmitter.on("checkUserName", () => {
//     console.log("nice meeting to you")
// })

// eventEmitter.emit("checkUserName");;



const event = require('events')

const eventEmitter = new event.EventEmitter

eventEmitter.on("checkName", () => {
    console.log("hello")
})

eventEmitter.emit("checkName")





