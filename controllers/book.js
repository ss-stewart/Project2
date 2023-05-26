const Genre = require('../models/genre')

function show(req, res, next) {
    Genre.findByID
    .then((res) => res.json())
    .then((book) => {
        res.render('portfolio/show', {
            book,
            title: 'Book Details',
        })
    })
    .catch(next)
}

function addBookToGenre(req, res, next) {
    Genre.findById(req.params.genreId)
    .then((genre) => {
        console.log(genre)
        genre.book.push(req.body)
        return genre.save()
    })
    .then(() => res.redirect(`/genres/${req.params.genreId}`))
    .catch(next)
}

function deleteBookFromGenre(req, res, next) {
    Genre.findById(req.params.genreId)
    .then((genre) => {
        if (!genre.user.equals(req.user._id)) throw new Error('Unauthorized')
        genre.book.id(req.params.bookId).deleteOne()
        return genre.save()
    })
    .then(() => res.redirect(`/genres/${req.params.genreId}`))
    .catch(next)
}

module.exports = {
	show,
	addBookToGenre,
    deleteBookFromGenre,
}