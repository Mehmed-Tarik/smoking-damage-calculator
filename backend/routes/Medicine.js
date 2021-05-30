const router = require('express').Router()

let Medicine = require('../models/Medicine.model')

router.route('/').get((req,res) => {
    Medicine.find()
    .then(medicine => res.json(medicine))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) => {

    const medicineType = req.body.medicineType
    const medicineIndex = req.body.medicineIndex

    const newMedicine = new Medicine({
        medicineType,
        medicineIndex

    })

    newMedicine.save()
    .then(() => res.json(' Medicine added' + newMedicine))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router