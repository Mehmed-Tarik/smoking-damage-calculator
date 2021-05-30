const router = require('express').Router()

let Training = require('../models/TreningType.model')

router.route('/').get((req,res) => {
    Training.find()
    .then(training => res.json(training))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) => {

    const trainingType = req.body.trainingType
    const trainingIcon = req.body.trainingIcon
    const trainingIndex = req.body.trainingIndex

    const newTraining = new Training({
        trainingType,
        trainingIcon,
        trainingIndex

    })

    newTraining.save()
    .then(() => res.json(' Training added' + newTraining))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router