const express = require('express');
const app = express();

//Server & Environment configuration
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//serve static iles from public directory
app.use(express.static("public"));

//parse body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Templates
//no

//Import Routes from Controller
const routes = require('../controller/controller.js');
app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});

//todo https://medium.com/@evangow/server-authentication-basics-express-sessions-passport-and-curl-359b7456003d