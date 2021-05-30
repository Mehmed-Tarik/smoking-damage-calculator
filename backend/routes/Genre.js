const router = require('express').Router()

let Gender = require('../models/Genre.model')

router.route('/').get((req,res) => {
    Gender.find()
    .then(gender => res.json(gender))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) => {

    const genderType = req.body.genderType
    const genderIndex = req.body.genderIndex

    const newGender = new Gender({
        genderType,
        genderIndex

    })

    newGender.save()
    .then(() => res.json(' Gender added' + newGender))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router