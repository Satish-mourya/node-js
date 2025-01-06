const mysql = require('mysql2');
 

 const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"app",
    password:"Satish@#3055"
 })
// inserting with placeholder
//  let q="show tables"

// for single user input
// let q="insert into user (id,username,email,password) values(?,?,?,?)";


// for multiple user input
let q="insert into user (id,username,email,password) values ?";

// let user1=["123","123_newuser","abc@gmail.com","abca"];

let users=[
    ["1243","1243_new1","4abc1@gmail.com","1234"],
    ["1234","123_new4","abc4@gmail.com","124"]
]

 try {
    // it is for without placeholder

    // connection.query(q,(err,result)=>{
    //     if(err) throw err;
    //     console.log(result)
    //  })

    // for placeholder

    connection.query(q,[users],(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
 } catch (error) {
    console.log(error);  
 }

 connection.end();