const express = require('express')
const router = express.Router()

const bookCtrl = require('../controllers/book')
const { addBookToGenre } = require('../controllers/book')

router.get('/:name', bookCtrl.show)
router.post('/:genreId', bookCtrl.addBookToGenre)
router.delete('/:genreId/:bookId', bookCtrl.deleteBookFromGenre)

module.exports = router

