const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CitySchema = new Schema({
    name: {type: String},
    cityIndex: {type: Number}
})

const City = mongoose.model('City', CitySchema)
module.exports = City