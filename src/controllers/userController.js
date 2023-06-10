const router = require('express').Router();

router.get('/login', async (req, res) => {
    res.render('/users/login');
});

router.post('/login', async (req, res) => {

    const { username, password } = req.body

})

router.get('/register', async (req, res) => {
    res.render('/users/register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    res.redirect('/users/login');

})

router.get('/logout', async (req, res) => {

});

module.exports = router;