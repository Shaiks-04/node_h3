const http = require('http');
const express = require("express");

const userRoute=require('./Routes/userRoute')
const app = express();

app.use(express.json())

app.use('/user',userRoute)

const Port = 3000;

const server = http.createServer(app);
server.listen(Port, () => {
    try {
        console.log(`server is running on port no.${Port}`);
    }
    catch (err) {
        console.log(err);
    }
});