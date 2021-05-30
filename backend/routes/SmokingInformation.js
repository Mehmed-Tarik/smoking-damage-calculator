const router = require('express').Router()

let SmokingInformation = require('../models/SmokingInformation.model')

router.route('/').get((req,res) => {
    SmokingInformation.find()
    .then(informations => res.json(informations))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) => {

    const lungDamage = req.body.lungDamage
    const moneySpent = req.body.moneySpent
    const lifeLost = req.body.lifeLost
    const packYear = req.body.packYear
    const totalCigarets = req.body.totalCigarets
    const nikotin = req.body.nikotin
    const monokside = req.body.monokside
    const katran = req.body.katran
    const bronhitis = req.body.bronhitis
    const stroke = req.body.stroke
    const hearthDisease = req.body.hearthDisease
    const lungCancer = req.body.lungCancer
    const mouthThrouathCancer = req.body.mouthThrouathCancer

    const newSmokingInformation = new SmokingInformation({
        lungDamage,
        moneySpent,
        lifeLost,
        packYear,
        totalCigarets,
        nikotin,
        monokside,
        katran,
        bronhitis,
        stroke,
        hearthDisease,
        lungCancer,
        mouthThrouathCancer
    })

    newSmokingInformation.save()
    .then(() => res.json(' Cigarets added' + newSmokingInformation))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router