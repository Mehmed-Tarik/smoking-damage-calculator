const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CigaretsSchema = new Schema({
    cigareteType: {type: String},
    color: {type: String},
    katran: {type: Number},
    nikotin: {type: Number},
    monokside: {type: Number}

})

const Cigarets = mongoose.model('Cigarets', CigaretsSchema)
module.exports = Cigarets