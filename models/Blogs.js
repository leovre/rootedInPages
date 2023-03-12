const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title for your blog']
        },

        image: {
            type: String,
            required: [true, 'Please provide a URL  image for your blog']
        },

        text: {
            type: String,
            required: [true, 'please provide text for your blog']

        },

    },
    {
        timestamps: true
    }
)

const Blogs = mongoose.model('Blogs', blogSchema)
module.exports = Blogs;