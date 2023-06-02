const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = 5000;

//ExpressConfig
require('./config/expressConfig')(app);

//Handlebars config
require('./config/handlebarsConfig')(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));