const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GenderSchema = new Schema({
    genderType: {type: String},
    genderIndex: {type: Number}
})

const Gender = mongoose.model('Gender', GenderSchema)
module.exports = Gender