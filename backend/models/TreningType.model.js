const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrainingSchema = new Schema({
    trainingType: {type: String},
    trainingIcon: {type: String},
    trainingIndex: {type: Number}
})

const Training = mongoose.model('Training', TrainingSchema)
module.exports = Training