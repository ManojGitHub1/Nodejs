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
// fs.copyFileSync("file1.txt", "file2.txt");  // copys the content of file1 to file2
// console.log("-->",__dirname);


// Node.js Create Server
// const dataControl = (req, res) => {
//     res.write("<h1>Hello World!</h1>");
//     res.end();
// }

// let http = require('http');
// creates server which gets request & response
// http.createServer((req, res) => {
//     res.write("<h1>Hello World!</h1><br><p>My name is Khan!</p>");
//     res.end();
// }).listen(4500)
// .listen listens in localhost:4500


// Package.json
// console.log("Package.json");
// console.log("hello");

// colors package
// var colors = require('colors');
// console.log("hello".red);

// Node-mon
// console.log("This Nodemon is Wonderfull!")



// const http = require('http');
// const data = require('./data')
// http.createServer((req, res)=>{
// res.writeHead(200,{'Content-Type':'application\json'});
// res.write(JSON.stringify(data));
// res.end();
// }).listen(5000);
// console.log(data)

// Getting input from command line
// console.log(process)
// node ./index.js hello , so hello is argv[2] now
// console.log(process.argv[2])



const fs = require('fs')
const input = process.argv;
// 1-argument file name, 2-argument content in file as input is array
// fs.writeFileSync(input[2], input[3])
if(input[2]=='add'){
    fs.writeFileSync(input[3], input[4])
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
    console.log("hi")
}else{
    console.log("Invalid input");
}
// node ./index.js apple.txt "This is a file created by fs,\n apple is fruit"
// node ./index.js add orange.txt "This is color & fruit"                         
// node ./index.js remove add   



// const { error } = require('console');
// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname, 'files');
// console.warn(dirPath);
// for(i=0; i<5; i++){
//     fs.writeFileSync(dirPath+`/hello${i}.txt`, `This is ${i}th file.`)
// }

// fs.readdir(dirPath, (error, files)=>{
//     // console.warn(files); // gives array
//     files.forEach((items)=>{
//         console.log("File name is",items);
//     })
// })

// const dirPathold = path.join(__dirname, 'apple.txt');
// console.log(dirPathold)
// console.log(dirPath)

// var oldPath = dirPathold
// var newPath = dirPath

// fs.rename(oldPath, newPath, function (err) {
//     if (err) return console.log(err); 
//     console.log('Successfully renamed - AKA moved!')
// })

// using fs-extra package
// const fse = require('fs-extra')

// const src = dirPathold
// const dest = dirPath
// const src = 'orange.txt'
// const dest = 'files/orange.txt'

// // using fse not fs
// fse.move(src, dest, (err) => { 
//     if (err) return console.log(err); 
//     console.log(`File successfully moved!!`); 
// });