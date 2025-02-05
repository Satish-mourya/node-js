const mongoose=require("mongoose")

main().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
    },
    price:{
        type:Number
    },
    discount:{
        type:Number,
        default:0
    }
});

const Book=mongoose.model("Book",bookSchema);


const book1= new Book({
    title:"the super star",
    author:"satish",
    price:23423
})

book1.save().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})