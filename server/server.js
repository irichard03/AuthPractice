const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hey guy!');
})

app.listen(3000, ()=>{
    console.log('Listening on localhost:3000');
});