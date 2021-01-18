const express = requires('express'); 
const app = express(); 


//ROUTES 

app.get('/', (req, res) => {
    res.send("Homepage");
})