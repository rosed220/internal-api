
import express, { response } from 'express';
import bodyParser from 'body-parser'
// const { append } = require('express/lib/response');



// const app = require('express')();
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', 
(req, res) => {
    console.log('TEST'); 
    
    res.send('Hello From Home page');});


console.log('hello world');
app.listen(
    PORT, () => console.log(`Server running on Port: http://localhost:${PORT}`));





