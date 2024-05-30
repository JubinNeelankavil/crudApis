const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Create a new item
router.post('/', itemController.createItem);

// Get all items
router.get('/', itemController.getItems);

// Get a single item by ID
router.get('/:id', itemController.getItem);

// Update an item by ID
router.put('/:id', itemController.updateItem);

// Delete an item by ID
router.delete('/:id', itemController.deleteItem);

module.exports = router;
