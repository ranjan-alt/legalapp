const express = require("express");
const app = express()


app.get("/", (req,res)=>{
    res.send("hello world ranjan")
})

app.listen(5000, ()=>{
    console.log("server islisting in port number 5000")
})