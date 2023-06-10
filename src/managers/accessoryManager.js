const Accessory = require('../models/Accessory');

exports.create = (data) => Accessory.create(data);

exports.getAll = async () => {

    const accessories = Accessory.find();

}

