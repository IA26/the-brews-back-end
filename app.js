const express = require('express'); 
const app = express(); 


//ROUTES 

app.get('/', (req, res) => {
    res.send("Homepage");
})


app.listen(8000);