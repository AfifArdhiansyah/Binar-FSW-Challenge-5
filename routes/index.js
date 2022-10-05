var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/index', { title: 'Express' });
});

/* GET add page. */
router.get('/add', function(req, res, next) {
    res.render('pages/add-page', { title: 'Express' });
});

/* GET update page. */
router.get('/update', function(req, res, next) {
    res.render('pages/update-page', { title: 'Express' });
});

module.exports = router;