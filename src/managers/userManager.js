const User = require('../models/User')

exports.register = (userData) => User.create(userData);

exports.login = (userData) => { }

exports.logout = () => { }
