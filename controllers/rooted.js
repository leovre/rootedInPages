const express = require('express')
const router = express.Router()
const { Blogs }= require('../models')

let mySeedData = [
    {
        title:'Rooted',
        image:'https://jesusculture.com/wp-content/themes/jesus-culture-v2/rootedbook/images/share-images/3.jpg',
        text: 'This book is about becoming rooted in the word of God'
    }
]

router.get('/seed', async (req, res, next) => {
    try {
        const deleteOldOnes = await Blogs.deleteMany({});
        const myBlogs = await Blogs.insertMany(mySeedData);
        res.redirect('/blogs')
    } catch (err) {
        console.log(err)
        return next();
    }
})



router.get('/blogs' , async(req, res, next) => {
try{
    const myBlogs = await Blogs.find({})
    res.render('rooted/blogs.ejs', {blog: myBlogs})
} catch(err) {
    console.log(err)
    return next();
}
})

router.get('/contact' ,(req, res, next) => {
try{
    res.render('rooted/contact.ejs')
} catch(err) {
    console.log(err)
    return next();
}
})

router.get('/join' ,(req, res, next) => {
try{
    res.render('rooted/join.ejs')
} catch(err) {
    console.log(err)
    return next();
}
})

router.get('/writeblog' ,(req, res, next) => {
try{
    res.render('rooted/writeBlog.ejs')
} catch(err) {
    console.log(err)
    return next();
}
})

router.post('/writeblog/new', async (req, res, next) => {
    try {
       const newBlog = await Blogs.create(req.body);
       res.redirect('/blogs')
    } catch (err) {
        console.log(err)
        return next();
    }
})

module.exports = router;