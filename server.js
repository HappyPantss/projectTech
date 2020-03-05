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

// function movies(req, res) {
// 	var doc = '<!doctype html>'
// 	var length = data.length
// 	var index = -1
// 	var movie
	
// 	doc += '<title>My movie website</title>'
// 	doc += '<h1>Movies</h1>'

// 	while (++index < length) {
// 		movie = data[index]
// 		doc += '<h2><a href="/' + movie.id + '">' + movie.title + '</a></h2>'
// 		doc += '<p>' + movie.plot + '</p>'
// 	}
// }

var data = [
	{
	  title: 'Lord of the Rings',
	  plot: 'The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron`s reign over Middle-earth.',
	  description: 'Five friends head to a remote …'
	}
  ];

app.get('/', (req, res, next) =>
	res.render('login.ejs', {data: data}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.get('/', (req, res) => res.send('Hello World!'))