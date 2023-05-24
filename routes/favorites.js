const express = require('express')
const router = express.Router()

const favoritesCtrl = require('../controllers/favorites')

router.get('/', favoritesCtrl.index)
router.get('/new', favoritesCtrl.newFavorite)
router.post('/', favoritesCtrl.create)
router.get('/:id', favoritesCtrl.show)
router.get('/:id/edit', favoritesCtrl.updateFavoriteForm)
router.put('/:id', favoritesCtrl.update)
router.delete('/:id', favoritesCtrl.deleteFavorite)

module.exports = router