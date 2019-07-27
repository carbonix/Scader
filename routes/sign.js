var express = require('express');
var router = express.Router();

/* Get Sign up page */
router.get('/signup', function(req, res, next)
{
    res.render('sign/signup', {title:'SignUp', layout: 'signlayout' });
});


module.exports = router;