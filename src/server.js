const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index'));
app.get('/waylon', (req, res) => res.render('waylon'))

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.listen(3000, () => console.log('Server is up on port 3000'));
