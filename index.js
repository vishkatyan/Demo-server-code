const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log("Server Running Successfully!");
});
app.get("/",(req,res)=>{
    res.send("Welcome to the home page...");
});