const router = require('express').Router()

let City = require('../models/City.model')

router.route('/').get((req,res) => {
    City.find()
    .then(city => res.json(city))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) => {

    const name = req.body.name
    const cityIndex = req.body.cityIndex

    const newCity = new City({
        name,
        cityIndex

    })

    newCity.save()
    .then(() => res.json(' City added' + newCity))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router