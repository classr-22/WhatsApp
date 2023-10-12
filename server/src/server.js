const app = require('./index');
const connect = require('./config/db');

const PORT = 5000;

app.listen(PORT,async ()=>{
    await connect();
    console.log("server is running on port :" + PORT);
})

