const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChronicDiseasesSchema = new Schema({
    diseaseType: {type: String},
    diseaseIndex: {type: Number}
})

const ChronicDiseases = mongoose.model('ChronicDiseases', ChronicDiseasesSchema)
module.exports = ChronicDiseases