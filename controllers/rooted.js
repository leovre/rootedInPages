const express = require('express')
const router = express.Router()



router.get('/blogs' ,(req, res, next) => {
try{
    res.render('rooted/blogs.ejs')
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


module.exports = router;