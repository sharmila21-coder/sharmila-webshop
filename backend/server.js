const express = require("express");
const app = express();

app.get("/products",(req,res)=>{
 res.json([
  {id:1,name:"Laptop",price:800},
  {id:2,name:"Phone",price:400}
 ]);
});

app.listen(3000,()=>{
 console.log("Server running on port 3000");
});