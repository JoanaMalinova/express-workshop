const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const SECRET = require('../config/config');

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

    const payload = { id: user._id, username };

    const token = jwt.sign(payload, SECRET, { expiresIn: '2d' });

    return token;
}

exports.logout = () => { }

