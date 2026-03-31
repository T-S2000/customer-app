const express = require("express");

const app = express();

const cors = require("cors");

const PORT = 8080;

app.use(cors());

app.use(express.json());

const customerRoutes = require("./routes/customer");

const mongoose = require("mongoose");

app.use("/api/customers", customerRoutes);

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

async function main() {
    try {
        const connectionString = "mongodb+srv://tarun:tarun@cluster0.rh15hs0.mongodb.net/?appName=Cluster0";

        await mongoose.connect(connectionString, {
            family: 4
        });

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Connection error:", error);
    }
}

main();