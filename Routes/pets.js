const express = require('express');
const router = express.Router()

router.get('/api/v1/pets', (req, res) => {
    res.send('Get all pets')
    
})

router.get('/api/v1/pets/name', (req, res) => {
    res.send('Get pet by name')
    
})

router.get('/api/v1/pets/owner', (req, res) => {
    res.send('Get pet by owner name')
    
})

module.exports = router