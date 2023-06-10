const Accessory = require('../models/Accessory');

exports.create = (data) => Accessory.create(data);

exports.getAll = async () => Accessory.find();

exports.getAvailable = (accessoryIds) => Accessory.find({ _id: { $nin: accessoryIds } });



