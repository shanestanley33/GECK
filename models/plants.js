const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },
    variety: {
        type: String,
        required: true,
    },
    harvest_time_in_days: {
        type: Number,
        required: true,
    },
    climate: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    soil_type: {
        type: String,
        required: true,
    },
    additional_notes: {
        type: String,
        required: false,
    },
    imageUrl: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('plant', plantSchema);