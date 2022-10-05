const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
//const volleyball = require('volleyball');
//app.use(volleyball);
const apiRouter = require('./api');
app.use(apiRouter);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}...`);
});