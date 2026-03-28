const express = require("express");

const app = express();

const PORT = 8080;

app.get('/',(req,res) => {
    res.send("Welcome to customer API!");
})

app.listen(PORT, (err) => {
    if(!err){
        console.log("server is running at port :",PORT);
    }else{
        console.log("something went wrong. please try again!",err);
    }
})