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
        required: false,
    },
    variety: {
        type: String,
        required: false,
    },
    harvest_time_in_days: {
        type: Number,
        required: false,
    },
    climate: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    soil_type: {
        type: String,
        required: false,
    },
    additional_notes: {
        type: String,
        required: false,
    },
    // imageUrl: {
    //     type: String,
    //     required: true,
    // }
});

module.exports = mongoose.model('plant', plantSchema);

