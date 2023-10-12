const express = require('express');

const userRoutes = require('./routes/userroutes.js');
const authRoutes = require('./routes/authroutes.js');
const app = express();

app.use(express.json());
app.get("/",(req,res)=>{
    return res.send({message: "welcome to chatIo api"});
});

app.use("/users",userRoutes);
app.use("/auth",authRoutes);

module.exports=app;
