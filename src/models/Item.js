const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

module.exports = mongoose.model('Item', itemSchema);
