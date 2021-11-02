const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.bgGreen.italic("success"))
const res = validator.isEmail('ajay@gmail.com');
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res))

