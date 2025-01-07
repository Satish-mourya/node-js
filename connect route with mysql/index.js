const express=require('express');
const {faker}=require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');
uuidv4();
const mysql=require('mysql2');
const path=require('path');
const app=express()

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Satish@#3055",
    database:"app"
})






 

app.get('/',(req,res)=>{
    let q="select count(*) from user";
    try{
        connection.query(q,(err,result)=>{
            if (err) throw err;
            let count=result[0]["count(*)"];
            res.render("home.ejs",{count}); // for printing the only key value we can result[key]
        });
    }catch(err){
        console.log(err);
        res.send("some error occured");
    }
})

app.get("/user")

const port=5000;
app.listen(port,()=>{
    console.log("server is listening");
})

