const Cube = require('../models/Cube');

exports.getAll = async (search, from, to) => {

    let result = await Cube.find().lean();

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
}

exports.getOne = (id) => Cube.findById(id).populate('accessories');

exports.create = (cubeData) => {

    const cube = new Cube(cubeData);

    return cube.save();
}

exports.attachAccessory = async (accessory, cubeId) => {

    // return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessory } });

    const cube = await Cube.findById(cubeId);

    cube.accessories.push(accessory);

    return cube.save();
}

