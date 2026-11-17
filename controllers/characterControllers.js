const Character = require('../models/characterModel');

// 1. Get all characters
exports.getCharacters = async (req, res) => {
    try {
        const characters = await Character.find();
        res.status(200).json({ success: true, count: characters.length, data: characters });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 2. Create a new character
exports.createCharacter = async (req, res) => {
    try {
        const newCharacter = await Character.create(req.body);
        res.status(201).json({ success: true, data: newCharacter });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// 3. Update a character
exports.updateCharacter = async (req, res) => {
    try {
        let character = await Character.findById(req.params.id);
        if (!character) {
            return res.status(404).json({ success: false, error: "Character not found" });
        }
        character = await Character.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({ success: true, data: character });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// 4. Delete a character
exports.deleteCharacter = async (req, res) => {
    try {
        const character = await Character.findById(req.params.id);
        if (!character) {
            return res.status(404).json({ success: false, error: "Character not found" });
        }
        await character.deleteOne();
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};