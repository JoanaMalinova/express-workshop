const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
    cubes.push({ ...cubeData, id: ddd });
}