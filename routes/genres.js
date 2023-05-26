const express = require('express')
const router = express.Router()

const genresCtrl = require('../controllers/genres')

router.get('/', genresCtrl.index)
router.get('/new', genresCtrl.newGenre)
router.post('/', genresCtrl.create)
router.get('/:id', genresCtrl.show)
router.get('/:id/edit', genresCtrl.updateGenreForm)
router.put('/:id', genresCtrl.update)
router.delete('/:id', genresCtrl.deleteGenre)

module.exports = router