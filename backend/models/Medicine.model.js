const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MedicineSchema = new Schema({
    medicineType: {type: String},
    medicineIndex: {type: Number}
})

const Medicine = mongoose.model('Medicine', MedicineSchema)
module.exports = Medicine