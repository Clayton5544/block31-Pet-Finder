const express = require('express');
const app = express();

app.get('/api/v1/pets', (req, res) => {
    res.send('Get all pets')
    
})

app.get('/api/v1/pets/name', (req, res) => {
    res.send('Get pet by name')
    
})

app.get('/api/v1/pets/owner', (req, res) => {
    res.send('Get pet by owner name')
    
})

const petsRouter = require('./Routes/pets')

app.use('/pets', petsRouter)

app.listen(8080)