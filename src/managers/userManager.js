const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {

    const user = await User.findOne({ username });
    const loginError = new Error('User or password don\'t match!');

    if (!user) {
        throw loginError;
    }

    const isValid = bcrypt.compare(password, user.password);

    if (!isValid) {
        throw loginError;
    }

    return user;
}

exports.logout = () => { }

