const express=require('express');
const {faker}=require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');
uuidv4();
const mysql=require('mysql2');
const path=require('path');
const app=express()
const methodOverride=require('method-override');

app.use(methodOverride("_method"));
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






 
// show the no of user
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

// show the user detail
app.get("/user",(req,res)=>{
    let q="select * from user";
    try {
        connection.query(q,(err,result)=>{
            if (err) throw err;
            let data=result;
             res.render("user.ejs",{data});
        })
    } catch (error) {
        console.log(err);
        res.send("some error occured");
    }
})

// edit route form 
app.get('/user/:id/edit',(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let q=`select* from user where id="${id}"`;
    try {
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let data=result[0];
            res.render("edit.ejs",{data});
        })
    } catch (error) {
        console.log(err);
        res.send("some error occured");
    }
})

// update info

app.patch('/user/:id',(req,res)=>{
    let {id}=req.params;
    let q=`select* from user where id="${id}"`;
    try {
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let data=result[0];
            res.send(data);
        })
    } catch (error) {
        console.log(err);
        res.send("some error occured in db ");
    }
})

const port=5000;
app.listen(port,()=>{
    console.log("server is listening");
})

