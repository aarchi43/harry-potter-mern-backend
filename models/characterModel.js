const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Character name is required'],
        trim: true
    },
    house: {
        type: String,
        required: [true, 'Hogwarts house is required'],
        enum: ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
    },
    patronus: {
        type: String,
        default: 'Unknown'
    },
    wand: {
        wood: String,
        core: String,
        length: Number
    },
    isAlive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Character', characterSchema);