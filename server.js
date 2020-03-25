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

// read data from DB
function users(req, res, next) {
	db.collection('user').find().toArray(done)

	function done(err, data) {
		if (err) {
			next(err)
		} else {
		// console.log(data)
			res.render('allUsers', {users: data})
		}
	}
}

// add data to DB
function add(req, res, next){
	db.collection('user').insertOne({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		phonenumber: req.body.phonenumber,
		password: req.body.password,
	}, done)

	function done(err, data) {
		if (err) {
			next(err)
		} else {
			res.render('/', {users: data})
		}
	}
}

// login using username and password (not working/ workin on)
// function login(req) {
// 	db.collection('user').findOne({
// 		username: req.body.username,
// 		password: req.body.password
// 	}).then(data => {
// 		if(data.username === req.body.username && data.password === req.body.password) {
// 			console.log('Welcome');
// 		} else {
// 			res.render('login', {error: 'password invalid'})
// 		}
// 	});
// }

// delete data (not working/ working on)
// function remove(req, res, next) {
// 	const id = req.params.id

// 	db.collection('user').deleteOne({
// 		_id: mongo.ObjectID(id)
// 	}, done)

// 	function done(err) {
// 		if (err) {
// 			next(err)
// 		} else {
// 			console.log(data)
// 			// res.json({status: 'ok'})
// 		}
// 	}
// }

// Render EJS to HTML
app.get('/allUsers', users)

// app.get('/detail?id=' + users._id + '', users)

app.get('/detail/' + users.username + '', users)

app.get('/detail', users)

app.post('/', add)

// app.post('/login', login)

// app.post('/', remove)

app.get('/', (req, res, next) => {
	res.render('login.ejs')
});

app.get('/register', (req, res, next) => {
	res.render('register.ejs')
});

app.get('/allUsers', (req, res, next) => {
	res.render('allUsers.ejs')
});

app.get('/detail', (req, res, next) => {
	res.render('detail.ejs')
});

// app.get('/detail?id=' + users._id + '', (req, res, next) => {
// 	res.render('detail.ejs')
// });

app.get('/detail/' + users.username + '', (req, res, next) => {
	res.render('detail.ejs')
});

app.get('/forgotPass', (req, res, next) => {
	res.render('forgotPass.ejs')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.get('/', (req, res) => res.send('Hello World!'))