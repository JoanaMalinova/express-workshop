const express = require('express');

const app = express();

const PORT = 5000;

const homeController = require('./controllers/homeController');

//ExpressConfig
require('./config/expressConfig')(app);

//Handlebars config
require('./confg/handlebarsConfig')(app);

app.use(homeController);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));