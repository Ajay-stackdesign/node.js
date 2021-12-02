const os = require('os');

const freeMemory = os.freemem()
console.log(`${freeMemory/1024/1024/1024}`)

// console.log(os.release())
// console.log(os.EOL)

// console.log(os.arch())
// console.log(os.constants)
// console.log(os.cpus())
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(os.loadavg())
// console.log(os.endianness())
// console.log(os.getPriority())
// console.log(os.release())
// console.log(os.platform())
// console.log(os.totalmem())
// console.log(os.type())
// console.log(os.version())
const totalMemory = os.totalmem()
console.log(`${totalMemory/1024 /1024 / 1024}`)
console.log(os.tmpdir())