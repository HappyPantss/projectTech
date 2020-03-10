const express = require('express');
const app = express();
const port = 3000;
const body = require('body-parser');
const slug = require('slug');
const path = require('path');
const multer = require('multer');

express()
	.use(express.static('static'))
	.use(express.urlencoded({extended: true}))
	.use('/static', express.static('static'))
	.set('view engine', 'ejs')
	.listen(8000)

let data = [{
	  	title: 'Lord of the Rings',
	  	plot: 'The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron`s reign over Middle-earth.',
	  	description: 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes..'
	}];

app.get('/', (req, res, next) => {
	res.render('login.ejs', {data: data})
});

app.get('/detail', (req, res, next) => {
	res.render('detail.ejs', {data: data})
});

app.post('/addmovie', (req, res, next) =>
{
	console.log(req.body)
  	const title = req.body.title;
  	const plot = req.body.plot;
  	const description = req.body.description;
	
	data.push({
		title: title,
	  	plot: plot,
	  	description: description
  })

  res.redirect('/')
});

function add(req, res) {
	data.push({
		title: req.body.title,
		plot: req.body.plot,
		description: req.body.description
	})

	res.redirect('/detail')
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.get('/', (req, res) => res.send('Hello World!'))