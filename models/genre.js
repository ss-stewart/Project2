const mongoose = require('mongoose')
const bookSchema = require('./book')

const genreSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		book: [bookSchema],
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Genre', genreSchema)