const events = require("events")

// const even = new.events.EvenEmitter
const event = new events.EventEmitter()


event.on("checkMyUserName",(sc,ss) => {
    console.log("hello world")
    console.log(`hello my name is ${ss}and ${ss} `)
})

event.emit("checkMyUserName",200,"hello")