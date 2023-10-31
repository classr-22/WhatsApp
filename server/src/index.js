const express = require('express');

const userRoutes = require('./routes/userroutes.js');
const authRoutes = require('./routes/authroutes.js');
const chatRoutes = require('./routes/chatroutes.js')

const app = express();

app.use(express.json());
app.get("/",(req,res)=>{
    return res.send({message: "welcome to chatIo api"});
});

app.use("/users",userRoutes);

app.use("/auth",authRoutes);

app.use("/chats",chatRoutes);

const messageRoutes = require("./routes/messageroutes.js");
app.use("/messages",messageRoutes)

module.exports=app;
