const express = require('express')
const router = express.Router()
const { Blogs }= require('../models')

router.use(express.static('public'))
let mySeedData = [
    {
        title:'Rooted',
        image:'https://jesusculture.com/wp-content/themes/jesus-culture-v2/rootedbook/images/share-images/3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Vel pharetra vel turpis nunc eget lorem dolor sed. Metus dictum at tempor commodo ullamcorper. Fames ac turpis egestas integer eget. Euismod nisi porta lorem mollis aliquam ut. Arcu dictum varius duis at. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Sagittis id consectetur purus ut faucibus pulvinar elementum. Laoreet id donec ultrices tincidunt arcu non. Convallis posuere morbi leo urna molestie. Fermentum leo vel orci porta. Ante in nibh mauris cursus mattis molestie a. Nec ullamcorper sit amet risus nullam eget felis.'
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
    console.log(err);
    return next();
}
})

router.get('/blogs/:id', async(req,res, next) => {
    try {
        // console.log(req.params.id)
        const showBlog = await Blogs.findById(req.params.id);
        res.render('rooted/showBlog.ejs', {blog: showBlog})
    } catch (err) {
        console.log(err);
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