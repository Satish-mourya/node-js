const express=require('express');
const path=require('path');
const data=require('./data.json')
const app=express();


const port=8080;

// using EJS
// note express automatically acquire ejs so that we don't require ejs module
app.set("view engine","ejs"); // view -> template
                              // with the use of ejs we don't send response but we render it
app.set("views",path.join(__dirname,"/views"));
                              
// app.get('/',(req,res)=>{
//     res.render("home.ejs");   // express by default search views folder to work
// })
// app.get('/rolldice',(req,res)=>{
//     let dice=Math.floor(Math.random()*6)+1;
//     let follower=["satish","rahul","rohit"]
//     res.render("home.ejs" , {dice,follower});   // express by default search views folder to work
// })

// app.get('/account/:username',(req,res)=>{
//     let {username}=req.params;
//     res.render('user.ejs',{username})
// })

app.get('/:username',(req,res)=>{
    let {username}=req.params;
    let idata=data[username];
    res.render("datafrom.ejs",{idata})
    
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})


