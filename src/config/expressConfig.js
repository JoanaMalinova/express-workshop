const express = require('express');
const path = require('path');

function expressConfig(app) {
    app.use(express.static(path.resolve(_dirname, '../public')));
}

module.exports = expressConfig;