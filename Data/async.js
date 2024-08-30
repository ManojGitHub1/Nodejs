// console.log("start exe...")
// console.log("load exe...")
// console.log("complete exe...")

// let a=10
// let b=0;
// console.log("start exe...")
// setTimeout(()=>{
//     console.log("load exe...")
//     b=20
// },2000)
// console.log("complete exe...")
// console.log(a+b); // handled using promise or async/await

// let waitingData = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         b=20
//         // b="can be string"
//         // b=['and array', 24, 17]
//         resolve(b)
//     },2000)
// })

// data=b from resolve
// waitingData.then((data)=>{
//     // b=data;
//     console.log(a+data)
// })






// Call-Stack--->Node-API, Callback-Queue
console.log("start")

// setTimeout is a func from C,C++ library which runs in Node-API as it is not Javascript code
// so both setTimeout is sent in Node-API memory from there it checks which should execute first
// as 2 setTimeout is 0 sec so it will send to callback-Queue memorey
// FROM call-stack memory WHERE MAIN WAS RUNNING AFTER MAIN IS FULLY EXECUTED AND REMOVED FORM call-stack
// call-back-Queue CODE WILL BE SENT TO call-stack

setTimeout(()=>{
    console.log("load 2sec exe...")
    b=20
},2000)

setTimeout(()=>{
    console.log("load 0sec exe...")
    b=20
},0)

console.log("end")



