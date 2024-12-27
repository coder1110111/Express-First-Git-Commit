const express=require("express");
const app=express();

app.use((req,res,next)=>{
    console.log("This is from First Middleware.");
    next();
})
app.use((req,res,next)=>{
    console.log("This is from second Middleware");
    res.send("<h1>This is How res.send() works.")
})



app.listen(3000);