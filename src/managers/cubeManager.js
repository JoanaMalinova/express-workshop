const cubes = [];
const uniqid = require('uniqid');

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
    cubes.push({ ...cubeData, uniqid });
}