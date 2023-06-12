const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [5, 'Username must be at least 5 letters long!'],
        match: [/^[A-Za-z1-9]+$/, 'Username must contain only english letters and numbers!'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [8, 'Username must be at least 8 letters long!'],
        validate: {
            validator: function (value) {
                return /^[A-Za-z1-9]+$/.test(value);
            },
            message: 'Password must contain only english letters and numbers!'
        }
    }
});

userSchema.virtual('repeatPassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new mongoose.MongooseError('Password and repeat password don\'t match!')
        }
    });

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
})

const User = mongoose.model('User', userSchema)

module.exports = User;