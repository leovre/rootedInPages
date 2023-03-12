const express = require('express')
const app = express();
const path = require('path');
const { rooted } = require('./controllers');

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))


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