const express=require("express");
const app=express();

// middleware -> can send response

// app.use((req,res)=>{
//     console.log("hii i am middleware");
//     res.send("hii");
// })

// using next we can pass control  to call another middleware 

app.use((req,res,next)=>{
    console.log("time:", Date.now());
    next();
})

app.use((req,res,next)=>{
    console.log("hii i am 2nd")
    next();
})

// app.use contain two arguments 1. path,2. function
// creating a utility middleware such as logger

app.use((req,res,next)=>{
    req.responseTime=new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.title, req.responseTime);
    next();
})

app.get('/',(req,res)=>{
    res.send("hii  baby")
})
app.get("/random",(req,res)=>{
    res.send("this is a random page")
})

app.listen(5000,()=>{
    console.log("server listening ")
})