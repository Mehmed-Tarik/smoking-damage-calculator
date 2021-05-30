const router = require('express').Router()

let Cigarets = require('../models/CigaretsType.model')

router.route('/').get((req,res) => {
    Cigarets.find()
    .then(cigarets => res.json(cigarets))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) => {

    const cigareteType = req.body.cigareteType
    const color = req.body.color
    const katran = req.body.katran
    const nikotin = req.body.nikotin
    const monokside = req.body.monokside

    const newCigarets = new Cigarets({
        cigareteType,
        color,
        katran,
        nikotin,
        monokside
    })

    newCigarets.save()
    .then(() => res.json(' Cigarets added' + newCigarets))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router