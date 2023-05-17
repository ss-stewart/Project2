const Favorite = require('../models/favorite')

function index(req, res, next) {
	Favorite.find({ user: req.user._id })
		.then((favorites) => {
			res.render('favorites/index', {
				favorites,
				title: 'My Mavorites',
			})
		})
		.catch(next)
}

function newFavorite(req, res) {
	res.render('favorites/new', { title: 'New Favorites' })
}

function create(req, res, next) {
	req.body.user = req.user._id
	Favorite.create(req.body)
		.then(() => res.redirect('/favorites'))
		.catch(next)
}

function show(req, res, next) {
	Favorite.findById(req.params.id)
		.then((favorite) => {
			res.render('favorites/show', {
				favorite,
				title: 'Favorite Details',
			})
		})
		.catch(next)
}

function deleteFavorite(req, res, next) {
	Favorite.findById(req.params.id)
		.then((favorite) => {
			if (!favorite.user.equals(req.user._id)) throw new Error('Unauthorized')
			return favorite.deleteOne()
		})
		.then(() => res.redirect('/favorites'))
		.catch(next)
}

function updateFavoriteForm(req, res, next) {
	Favorite.findById(req.params.id)
		.then((favorite) => {
			res.render('favorites/edit', {
				favorite,
				title: 'Favorite Details',
			})
		})
		.catch(next)
}

function update(req, res, next) {
	Favorite.findById(req.params.id)
		.then((favorite) => {
			if (!favorite.user.equals(req.user._id)) throw new Error('Unauthorized')
			return favorite.updateOne(req.body)
		})
		.then(() => res.redirect(`/favorites/${req.params.id}`))
		.catch(next)
}

module.exports = {
	index,
	create,
	show,
	update,
	newFavorite,
	deleteFavorite,
	updateFavoriteForm,
}
