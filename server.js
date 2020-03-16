const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const slug = require('slug');
const path = require('path');
const multer = require('multer');
const urlencodedParser = bodyParser.urlencoded({
	extended: true
});
const mongo = require('mongodb')

require('dotenv').config();
// console.log(process.cwd());

// Mongo setup code, get necessary collection back in let matches.
let db = null;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {
  db = client.db(process.env.DB_NAME);
});

mongo.MongoClient.connect(uri, function (err, client) {
	if (err) {
		throw err
	}

	db = client.db(process.env.DB_NAME)
	// console.log(db)
})

app.use(express.static('static'))
app.use(express.urlencoded({extended: true}))
app.use('/static', express.static('static'))
app.set('view engine', 'ejs') // Makes sure we use EJS as a templating engine

// find data from DB
function users(req, res, next) {
	db.collection('user').find().toArray(done)
  
	function done(err, data) {
	  if (err) {
		next(err)
	  } else {
		// console.log(data)
		res.render('login', {users: data})
	  }
	}
  }

// function users(req, res, next) {
// 	db.collection('user').find().toArray(done)
// 	// connection.query('SELECT * FROM users', done)

// 	function done(err, data) {
// 		if (err) {
// 			next(err)
// 		} else {
// 			console.log(data)
// 			res.render('detail', {data: data})
// 		}
// 	}
// }

// function user(req, res, next) {
// 	var id = req.params.id
	
// 	db.collection('user').findOne({
// 		_id: new mongo.ObjectID(id)
// 	}, done)

// 	function done(err, data) {
// 		if (err) {
// 			next(err)
// 		} else {
// 			res.render('detail', {data: data})
// 		}
// 	}
// }

// Render EJS to HTML
app.get('/', users)

app.get('/detail', (req, res, next) => {
	res.render('detail.ejs', {data: data})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.get('/', (req, res) => res.send('Hello World!'))