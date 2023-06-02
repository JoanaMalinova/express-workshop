const cubes = [];
const uniqid = require('uniqid');

exports.getAll = (search, from, to) => {

    let result = cubes.slice();

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

exports.getOne = (id) => cubes.find(cube => cube.id === id);

exports.create = (cubeData) => {
    cubes.push({ ...cubeData, uniqid });
}