const express=require('express')
const app=express();
 
let port=7000;
app.get('/',(req,res)=>{
    res.send("you are at home")
})
app.get('/about',(req,res)=>{
    res.send("you are at about")
})

app.get('/:username',(req,res)=>{
    console.log(req.params);
    let {username,id}=req.params;
    res.send(`welcome to the page of @${username}`)
});




// app.use((req,res)=>{
//     console.log(`app is listening on port ${port}`)
//     let code=`<h1> Fruits</h1><ul><li>apple</li><li>orange</li></ul>`
//     res.send(code);
// })
app.listen(port,()=>{
    console.log(`app is listening`)
})