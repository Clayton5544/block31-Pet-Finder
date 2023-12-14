const express = require('express');
const app = express();

app.get('/api/v1/pets', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    
});

app.get('/api/v1/pets/name', (req, res) => {
    res.sendFile(__dirname = + '/petsName.html');
    
});

app.get('/api/v1/pets/owner', (req, res) => {
    res.sendFile(__dirname = + '/ownerName.html');    
});

const petsRouter = require('./Routes/pets');

app.use('/pets', petsRouter);

app.listen(8080);