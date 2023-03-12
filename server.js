const express = require('express')
const app = express();
const path = require('path');
const mongo = require('./config/connection')
const { rooted } = require('./controllers');
const methodOverride = require('method-override')
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('index')
} )



app.use('', rooted)


app.get('/*', (req, res) => {
    res.render('404')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})