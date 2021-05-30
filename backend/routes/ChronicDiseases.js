const router = require('express').Router()

let ChronicDiseases = require('../models/ChronicDiseases.model')

router.route('/').get((req,res) => {
    ChronicDiseases.find()
    .then(disease => res.json(disease))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) => {

    const diseaseType = req.body.diseaseType
    const diseaseIndex = req.body.diseaseIndex

    const newDisease = new ChronicDiseases({
        diseaseType,
        diseaseIndex

    })

    newDisease.save()
    .then(() => res.json(' Disease added' + newDisease))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router