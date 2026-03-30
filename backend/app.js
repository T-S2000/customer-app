const express = require("express");

const app = express();

const cors = require("cors");

const PORT = 8080;

app.use(cors());

app.use(express.json);

const customerRoutes = require("./routes/customer");

app.use("api/customers", customerRoutes);

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