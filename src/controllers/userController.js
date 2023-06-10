const router = require('express').Router();

router.get('/login', async (req, res) => {
    res.render('/user/login');
});

router.post('/login', async (req, res) => {

})

router.get('/register', async (req, res) => {
    res.render('/user/register');
});

router.post('/register', async (req, res) => {

})

router.get('/logout', async (req, res) => {

});