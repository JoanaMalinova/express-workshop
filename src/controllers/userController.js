const router = require('express').Router();
const userManager = require('../managers/userManager');

router.get('/login', async (req, res) => {
    res.render('/users/login');
});

router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    const token = await userManager.login(username, password);

    res.cookie('auth', token);

    res.redirect('/');

})

router.get('/register', async (req, res) => {
    res.render('/users/register');
});

router.post('/register', async (req, res) => {

    const { username, password, repeatPassword } = req.body;

    await userManager.register({ username, password, repeatPassword });

    res.redirect('/users/login');

})

router.get('/logout', async (req, res) => {
    res.clearCookie("auth");
    res.redirect('/')
});



module.exports = router;