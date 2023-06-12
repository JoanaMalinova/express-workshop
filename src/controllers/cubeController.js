const router = require('express').Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');
const getDifficultyOptions = require('../utils/viewHelpers');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/create', isAuth, (req, res) => {
    res.render('cube/create');
});

router.post('/create', isAuth, async (req, res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel } = req.body;
    await cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
        owner: req.user._id
    });
    res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {

    const cube = await cubeManager.getOne(req.params.cubeId).lean();

    if (!cube) {
        return res.redirect('/404')
    }

    const isOwner = cube.owner?.toString() === req.user?._id;

    res.render('cube/details', { cube, isOwner });
});

router.get('/:cubeId/attach-accessory', isAuth, async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    const accessories = await accessoryManager.getAvailable(cube.accessories).lean();
    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });
});

router.post('/:cubeId/attach-accessory', isAuth, async (req, res) => {

    const { accessory } = req.body;
    const cubeId = req.params.cubeId;

    await cubeManager.attachAccessory(accessory, cubeId);

    res.redirect(`/cubes/${cubeId}/details`);
});

router.get('/:cubeId/edit', isAuth, async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();

    const options = getDifficultyOptions(cube.difficultyLevel);

    res.render('cube/edit', { cube, options });
});

router.post('/:cubeId/edit', isAuth, async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    await cubeManager.editCube(req.params.cubeId, { name, description, imageUrl, difficultyLevel });

    res.redirect(`/cubes/${req.params.cubeId}/details`)
});

router.get('/:cubeId/delete', isAuth, async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();

    const options = getDifficultyOptions(cube.difficultyLevel);

    res.render('cube/delete', { cube, options });
});

router.post('/:cubeId/delete', isAuth, async (req, res) => {
    await cubeManager.deleteCube(req.params.cubeId);

    res.redirect('/');
});




module.exports = router;