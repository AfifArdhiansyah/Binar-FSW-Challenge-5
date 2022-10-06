const express = require('express');
const router = express.Router();
const {Cars} = require('../models');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const cars = await Cars.findAll({order: [['name', 'ASC']]});
    console.log('this is cars', cars);
    res.render('pages/index', { cars: cars});
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