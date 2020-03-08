const express = require('express');
const app = express();
const port = 3000;
const slug = require('slug');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

express()
	.use(express.static('static'))
	.use(bodyParser.urlencoded({extended: true}))
	.use('/static', express.static('static'))
	.set('view engine', 'ejs')
	.get('/', movies)
	.get('/add', form)
	.get('/:id', movie)
	.post('/', add)

// app.use('/static', express.static('static'));
// app.get('/', (req, res) =>
// 	res.sendfile(path.join(__dirname + 'static/index.html')))

// app.get('/', (req, res) =>
// 	res.sendfile(path.join(__dirname + 'static/register.html')))

function movies(req, res) {
	res.render('login.ejs', {data: data})
}

function movie(req, res, next) {
	let id = req.params.id
	var movie = find(data, function (value){
		return value.id === id
	})

	if(!movie) {
		next()
		return
	}

	res.render('detail.ejs', {data: movie})
}

function form(req, res) {
	res.render('add.ejs')
}

function add(req, res) {
	let id = slug(req.body.title).toLowerCase()

	console.log(add)
	
	data.push({
		id: id,
		title: req.body.title,
		plot: req.body.plot,
		description: req.body.description
	})

	res.redirect('/login' + id)
}

let data = [
	{
		id: 'lord-of-the-rings',
	  	title: 'Lord of the Rings',
	  	plot: 'The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron`s reign over Middle-earth.',
	  	description: 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes..'
	}
  ]

app.get('/', (req, res, next) =>
	res.render('login.ejs', {data: data}))

app.get('/', (req, res, next) =>
	res.render('detail.ejs', {data: data}))

app.get('/', (req, res, next) =>
	res.render('add.ejs', {data: data}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.get('/', (req, res) => res.send('Hello World!'))