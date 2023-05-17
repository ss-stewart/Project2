const mongoose = require('mongoose')
const sketchSchema = require('./sketch')

const favoriteSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		sketch: [sketchSchema],
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Favorite', favoriteSchema)