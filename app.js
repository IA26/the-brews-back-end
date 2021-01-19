const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');


//ROUTES 

app.get('/', (req, res) => {
    res.send("Homepage");
})


app.listen(8000);