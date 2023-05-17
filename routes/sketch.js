const express = require('express')
const router = express.Router()

const sketchCtrl = require('../controllers/sketch')
const { addSketchToFavorite } = require('../controllers/sketch')

router.get('/:name', sketchCtrl.show)
router.post('/:favoriteId', sketchCtrl.addSketchToFavorite)
router.delete('/:favoriteId/:sketchId', sketchCtrl.deleteSketchFromFavorite)

module.exports = router

