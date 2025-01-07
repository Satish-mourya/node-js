const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
 

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

// creating a random user information from faker package

function createRandomUser(){
    return [
     faker.string.uuid(),
     faker.internet.username(),  
     faker.internet.email(),
     faker.internet.password()
    ]
}
// for multiple user input
let q="insert into user (id,username,email,password) values ?";

// let user1=["123","123_newuser","abc@gmail.com","abca"];

let newuser=[];
for(i=0;i<100;i++){
    newuser.push(createRandomUser());
}
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

    connection.query(q,[newuser],(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
 } catch (error) {
    console.log(error);  
 }

 connection.end();