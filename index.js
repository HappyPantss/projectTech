// Server opstarten
var http = require('http')

http.createServer(onrequest).listen(8000)

function onrequest(req, res) {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/html')
	res.end('Hello World!\n')
}


// Camel Case opdracht 
const camelCase = require ('camelcase');

console.log(camelCase('sergio-eijben'));

var express = require('express')

var data = [
  {
    id: 'evil-dead',
    title: 'Evil Dead',
    plot: 'Five friends travel to a cabin in the …',
    description: 'Five friends head to a remote …'
  },
  {
    id: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    plot: 'Two imprisoned men bond over a number …',
    description: 'Andy Dufresne is a young and  …'
  }
]

express()
.get('/', movies)
.listen(8000)

function movies(req, res) {
var doc = '<!doctype html>'
var length = data.length
var index = -1
var movie

doc += '<title>My movie website</title>'
doc += '<h1>Movies</h1>'

while (++index < length) {
  movie = data[index]
  doc += '<h2><a href="/' + movie.id + '">' + movie.title + '</a></h2>'
  doc += '<p>' + movie.plot + '</p>'
}


res.send(doc)
}