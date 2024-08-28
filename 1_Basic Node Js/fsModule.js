const fs = require("fs");
fs.writeFile("radha.txt", "this is radha ji file", () => {
  console.log("created the radha ji file");
});
fs.writeFileSync("shreya.txt", "this is the file about shreya ji");

//this will work in non blocking io system
// fs.readFile("shreya.txt", "utf8", (err, data)=> {
//     console.log(err, data)
// })

//its is used when we want to await for a file and node js will intentionally block the readed file console() to read and its content will ready
// let shreyaJi = fs.readFileSync("shreya.txt");
// console.log(shreyaJi.toString());
console.log("I readed the file");
