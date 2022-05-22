const express = require('express');
const router = express.Router();
const Hero = require('../model/Hero.model');

router.get('/', (req, res) => {
    Hero.getHero(res)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Hero.getHeroById(id, res)
})

router.post('/update', (req, res) => {
    const data = {
        "id": req.body.id,
        "name": req.body.name,
        "role": req.body.role
    }
    Hero.updateHeroById(data, res)
})

router.post('/add', (req, res) => {
    const data = {
        "name": req.body.name,
        "role": req.body.role
    }
    Hero.addHero(data, res)
})

router.post('/remove', (req, res) => {
    const id = req.body.id
    Hero.removeHero(id, res)
})

module.exports = router