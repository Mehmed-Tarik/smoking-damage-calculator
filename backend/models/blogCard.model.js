const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogCardSchema = new Schema({
    image: {type: String},
    title: {type: String},
    summary: {type: String},
    text: {type: String}
})

const BlogCard = mongoose.model('BlogCard', BlogCardSchema)
module.exports = BlogCard