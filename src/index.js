const express = require('express');

const app = express();

const PORT = 5000;

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

//ExpressConfig
require('./config/expressConfig')(app);

//Handlebars config
require('./config/handlebarsConfig')(app);

app.use(homeController);
app.use('/cubes', cubeController);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));