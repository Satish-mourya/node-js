const express=require('express');
const path=require("path");
const app=express();
const port=8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

let employee=[
    {
        id:1,
        name:"satish",
        salary:"200000"
    },
];


app.get("/",(req,res)=>{
    res.render("index.ejs",{employee});
});

app.get("/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/employee",(req,res)=>{
    let {id,name,salary}=req.body;
    const newEmp={
        id:id,
        name:name,
        salary:salary
    }

    employee.push(newEmp);

    res.redirect('/');
});

app.get("/edit/:id",(req,res)=>{
    const {id}=req.params;
    const info=employee.find((i)=>i.id==parseInt(id));
    res.render("edit.ejs",{info});

});

app.post("/edit",(req,res)=>{
    const {id,name,salary}=req.body;
    const info=employee.find((i)=>i.id==parseInt(id));
    info.name=name;
    info.salary=salary;
    res.redirect('/');
});


app.get("/delete/:id",(req,res)=>{
    const {id}=req.params;
    const index=employee.findIndex((i)=>i.id==parseInt(id));
    employee.splice(index,1);
    res.redirect('/');

})


app.listen(port,()=>{
    console.log("it is working");
})