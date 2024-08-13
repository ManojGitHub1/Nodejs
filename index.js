// let app = require('./app')

// console.log(app)
// console.log(app.z())
// let arr = [31, 41, 28, 22, 92, 65, 76];
// let result = arr.filter((item)=>{
//     // console.log(item);
//     return item>=50
// })
// console.warn(result)


// Core Module (inbuilt modules)
// console, fs(file system), buffer, HTTP
// 2 types - Global & Non-Global core modules
// console is a global cmodl
// fs is non-global cmodl
// const fs = require('fs');
// console.log("hi")
// fs.writeFileSync("Hello.txt", "Manoj love's coding!")
// console.log("-->",__dirname);


// Node.js Create Server
// const dataControl = (req, res) => {
//     res.write("<h1>Hello World!</h1>");
//     res.end();
// }

// let http = require('http');
// creates server which gets request & response
// http.createServer((req, res) => {
//     res.write("<h1>Hello World!</h1>");
//     res.end();
// }).listen(4500)
// .listen listens in localhost:4500


// Package.json
// console.log("Package.json");
// console.log("hello");

// colors package
var colors = require('colors');
console.log("hello".red);
console.log("This Nodemon is Wonderfull!")
console.log(100+123)
