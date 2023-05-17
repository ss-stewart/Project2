const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/', function(req, res, next) {
  // fetch('<api url>') .....................................
		.then((res) => res.json())
		.then((sketch) => {
			res.render('portfolio/index', {
				sketch: sketch.results,
				title: 'Portfolio',
			})
		})
})

router.get('/auth/google', passport.authenticate(
  'google', 
  { scope: ['profile', 'email'] }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
))

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/')
  })
})

module.exports = router;
