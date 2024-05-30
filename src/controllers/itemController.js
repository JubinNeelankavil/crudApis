const Item = require('../models/Item');

exports.createItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).send(item);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).send(items);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        res.status(200).send(item);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) {
            return res.status(404).send();
        }
        res.status(200).send(item);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        res.status(200).send(item);
    } catch (err) {
        res.status(500).send(err);
    }
};
