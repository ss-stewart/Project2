const Genre = require('../models/genre')

function index(req, res, next) {
	Genre.find({ user: req.user._id })
		.then((genres) => {
			res.render('genres/index', {
				genres,
				title: 'My Mavorites',
			})
		})
		.catch(next)
}

function newGenre(req, res) {
	res.render('genres/new', { title: 'New Genres' })
}

function create(req, res, next) {
	req.body.user = req.user._id
	Genre.create(req.body)
		.then(() => res.redirect('/genres'))
		.catch(next)
}

function show(req, res, next) {
	Genre.findById(req.params.id)
		.then((genre) => {
			res.render('genres/show', {
				genre,
				title: 'Genre Details',
			})
		})
		.catch(next)
}

function deleteGenre(req, res, next) {
	Genre.findById(req.params.id)
		.then((genre) => {
			if (!genre.user.equals(req.user._id)) throw new Error('Unauthorized')
			return genre.deleteOne()
		})
		.then(() => res.redirect('/genres'))
		.catch(next)
}

function updateGenreForm(req, res, next) {
	Genre.findById(req.params.id)
		.then((genre) => {
			res.render('genres/edit', {
				genre,
				title: 'Genre Details',
			})
		})
		.catch(next)
}

function update(req, res, next) {
	Genre.findById(req.params.id)
		.then((genre) => {
			if (!genre.user.equals(req.user._id)) throw new Error('Unauthorized')
			return genre.updateOne(req.body)
		})
		.then(() => res.redirect(`/genres/${req.params.id}`))
		.catch(next)
}

module.exports = {
	index,
	create,
	show,
	update,
	newGenre,
	deleteGenre,
	updateGenreForm,
}
