let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index.html');
});
router.get('/home', function(req, res, next) {
    res.redirect('/');
});
router.get('/skills', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;