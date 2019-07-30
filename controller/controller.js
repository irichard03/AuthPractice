const express = require('express');
const user = require('../models/user.js');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Hey guy!');
})

app.get('/restricted', (req,res) => {
    
    res.send('Hey guy!');
})