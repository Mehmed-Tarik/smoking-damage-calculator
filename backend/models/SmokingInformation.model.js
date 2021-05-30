const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SmokingInformationSchema = new Schema({
    lungDamage: {type: Number},
    moneySpent: {type: Number},
    lifeLost: {type: Number},
    packYear: {type: Number},
    totalCigarets: {type: Number},
    nikotin: {type: Number},
    monokside: {type: Number},
    katran: {type: Number},
    bronhitis: {type: Number},
    stroke: {type: Number},
    hearthDisease: {type: Number},
    lungCancer: {type: Number},
    mouthThrouathCancer: {type: Number}
})

const SmokingInformation = mongoose.model('SmokingInformation', SmokingInformationSchema)
module.exports = SmokingInformation