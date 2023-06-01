const express = require('express');

const app = express();

const PORT = 5000;

//ExpressConfig
require('./config/expressConfig')(app);

//Handlebars config
require('./confg/handlebarsConfig')(app);

//Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));