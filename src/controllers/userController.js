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
    try {
        await userManager.register({ username, password, repeatPassword });

        res.redirect('/users/login');

    } catch (err) {
        const firstErrorMessage = Object.values(err.errors)[0].message;
        res.status(404).render('/users/register', { errorMessage: firstErrorMessage });

    }

})

router.get('/logout', async (req, res) => {
    res.clearCookie("auth");
    res.redirect('/')
});



module.exports = router;