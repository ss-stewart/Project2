const Favorite = require('../models/favorite')

function show(req, res, next) {
    Favorite.findByID
    .then((res) => res.json())
    .then((sketch) => {
        res.render('portfolio/show', {
            sketch,
            title: 'Sketch Details',
        })
    })
    .catch(next)
}

function addSketchToFavorite(req, res, next) {
    Favorite.findById(req.params.favoriteId)
    .then((favorite) => {
        console.log(favorite)
        favorite.sketch.push(req.body)
        return favorite.save()
    })
    .then(() => res.redirect(`/favorites/${req.params.favoriteId}`))
    .catch(next)
}

function deleteSketchFromFavorite(req, res, next) {
    Favorite.findById(req.params.favoriteId)
    .then((favorite) => {
        if (!favorite.user.equals(req.user._id)) throw new Error('Unauthorized')
        favorite.sketch.id(req.params.sketchId).deleteOne()
        return favorite.save()
    })
    .then(() => res.redirect(`/favorites/${req.params.favoriteId}`))
    .catch(next)
}

module.exports = {
	show,
	addSketchToFavorite,
    deleteSketchFromFavorite,
}