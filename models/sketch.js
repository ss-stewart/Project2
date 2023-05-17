const mongoose = require('mongoose')

const sketchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = sketchSchema