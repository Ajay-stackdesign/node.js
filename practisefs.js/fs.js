const fs = require("fs");

// create a folder named it crud
// create  create a file in it named bio.txt and data into it
// 3: add more data into the file at the end of the existing 
// 4: read the data without getting the buffer data at file file encoding 
// 5: rename the file name to mybio.txt 
// 6: now delege both the file and the folder
// fs.mkdirSync("ajay")
 
// fs.mkdirSync("ajay")
fs.writeFileSync("ajay/text.txt","hello");
fs.appendFileSync("ajay/text.txt","kaise ho")
const read = fs.readFileSync("ajay/text.txt","utf-8")
console.log(read);
fs.renameSync("ajay/text.txt","ajay/bio.txt");
fs.unlinkSync("ajay/bio.txt")
fs.rmdirSync("ajay")

