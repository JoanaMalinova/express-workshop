const cubes = [];
const uniqid = require('uniqid');

exports.getAll = () => cubes.slice();

exports.getOne = (id) => cubes.find(cube => cube.id === id);

exports.create = (cubeData) => {
    cubes.push({ ...cubeData, uniqid });
}
