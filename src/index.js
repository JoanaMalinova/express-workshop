const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = 5000;

//ExpressConfig
require('./config/expressConfig')(app);
//Handlebars config
require('./config/handlebarsConfig')(app);

//mongoose config
require('./config/mongooseConfig')()
    .then(() => console.log('DB connected successfuly!'))
    .catch((err) => console.log(`DB error: ${err.message}`));

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));





