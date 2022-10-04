const router = require('express').Router();
const {Cars} = require('../models');
const Validator = require('fastest-validator');
const v = new Validator();
const path = require('path');
const fs = require('fs');

//GET ALL
router.get('/', async (req, res) => {
    const cars = await Cars.findAll();
    res.json(cars);
});

//GET ONE
router.get('/:id', async (req, res) => {
    const car = await Cars.findByPk(req.params.id);
    res.json(car);
});

//POST
router.post('/', async (req, res) => {
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.name;
    const year = parseInt(req.body.year);
    const file = req.files.img;
    const fileSize = file.size
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    (req.body.year) ? req.body.year = parseInt(req.body.year) : req.body.year = null;
    const schema = {
        name: {type: "string", min: 3, max: 50},
        year: {type: "number", positive: true, integer: true, min: 1886, max: 2022},
        img: {type: "string", min: 3, max: 255}
    };
    const validate = v.compile(schema);
    const valid = validate({name: name, year: year, img: url});

    if(valid){
        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        file.mv(`./public/images/${fileName}`, async(err)=>{
            if(err) return res.status(500).json({msg: err.message});
            try {
                await Cars.create({name: name, year: year, img: url});
                res.status(201).json({msg: "Cars Created Successfuly"});
            } catch (error) {
                console.log(error.message);
            }
        })
    }
    else{
        res.status(400).json({error: valid});
    }
    
});

//PUT
router.put('/:id', async (req, res) => {
    const schema = {
        name: {type: "string", min: 3, max: 50},
        year: {type: "number", positive: true, integer: true, min: 1886, max: 2022}
    };
    const validate = v.compile(schema);
    const valid = validate(req.body);
    if (valid === true) {
        const car = await Cars.update(req.body, {where: {id: req.params.id}});
        res.json(car);
    } else {
        res.status(400).json({error: valid});
    }
});

//DELETE
router.delete('/:id', async (req, res) => {
    const car = await Cars.destroy({where: {id: req.params.id}});
    res.json(car);
});


module.exports = router;