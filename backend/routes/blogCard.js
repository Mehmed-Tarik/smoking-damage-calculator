const router = require('express').Router()

let BlogCard = require('../models/blogCard.model')

router.route('/').get((req,res) => {
    BlogCard.find()
    .then(card => res.json(card))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) => {

    const image = req.body.image        
    const title = req.body.title
    const summary = req.body.summary
    const text = req.body.text

    const newBlogCard= new BlogCard({
        image,
        title,
        summary,
        text
    })

    newBlogCard.save()
    .then(() => res.json(' new BlogCard added' + newBlogCard))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router