const express = require('express');
const connection = require('./database/connection');
const bodyParser = require('body-parser');
const route = require('./Route/route');


const app = express();
app.use(bodyParser.json());
app.use(route);

app.get('/', (req, res)=>{
    res.send({message: "Hello form app.js"});
})

const PORT = 2020;
app.listen(PORT, async ()=>{
    console.log(`Server is running at ${PORT}`);
    await connection();
})