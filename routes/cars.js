const router = require('express').Router();
const {Cars} = require('../models');
const Validator = require('fastest-validator');
const v = new Validator();

router.get('/', (req, res) => {
    res.send('Welcome to the Cars API!');
});

//POST
router.post('/', async (req, res) => {
    const schema = {
        name: {type: "string", min: 3, max: 50},
        year: {type: "number", positive: true, integer: true, min: 1886, max: 2022}
    };
    const validate = v.compile(schema);
    const valid = validate(req.body);
    if (valid === true) {
        const car = await Cars.create(req.body);
        res.json(car);
    } else {
        res.status(400).json({error: valid});
    }
});

module.exports = router;