const express = require('express');
const app = express();
const port = 3000;
const movies = '';

app.set('view engine', 'ejs')
app.set('views', 'view')

// app.use('/static', express.static('static'));
// app.get('/', (req, res) =>
// 	res.sendfile(path.join(__dirname + 'static/index.html')))

// app.get('/', (req, res) =>
// 	res.sendfile(path.join(__dirname + 'static/register.html')))

app.get('/', (req, res) =>
	res.render('login.ejs'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))

// app.get('/', (req, res) => res.send('Hello World!'))