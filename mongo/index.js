const mongoose=require('mongoose');


// making a connection between mongoose and js
main()
.then((res) => {
    console.log("connection successful");
})
.catch(err=>console.log('err0'));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// cretaing a schema

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

// creating  a collection using model

const User=mongoose.model("User",userSchema);
const  Employee=mongoose.model("Employee",userSchema);
// creating a document

// const user1=new User({
//     name:"rohit",
//     email:"rohit@gmail.com",
//     age:21,
// });

// // saving the document
// user1
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// // inserting a multiple docs using insert many

// User.insertMany(
//     [
//         {name:"Tony",email:"tony@gmail.com",age:33},
//         {name:"rahul",email:"rahul@gmail.com",age:23},
//         {name:"vandana",email:"vandana@gmail.com",age:23},
//     ]
// ).then((res)=>{
//     console.log(res);
// });


// // use find() to read the value
// User.findOne({ age: 33}).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log("err"))

// // updating the value

// User.updateOne({name:"Tony",age:1}).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })




// update and return these updated value
//1.findOneAndUpdate()
//2.findByIdAndUpdate()
/*User.findOneAndUpdate({age:21},{name:"vivek"},{new:true}).then((res)=>{  // return value contain without updated data but it is updated in document 
    console.log(res);
}).catch((err)=>{
    console.log(err)
})*/




// // delete operation
// //1.deleteOne()
// User.deleteOne({name:"Tony"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// delete and get that value in retuen 
// 1.model.findByIdAndDelete()
// 2.model.findOneAndDelete()

User.findOneAndDelete({name:"Tony"}).then((res)=>{
    console.log(res)
})