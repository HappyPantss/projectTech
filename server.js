const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// COMMENT: Would recommend using slug when taking data from a form like slug(req.body.firstName)
// COMMENT: Only if you use it, import it. It's now removed because you didn't use it at all.
const urlencodedParser = bodyParser.urlencoded({
	extended: true
});
const mongo = require('mongodb')

require('dotenv').config();

// Mongo setup code, get necessary collection back in let matches.
let db = null;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Turned the database connection to the right one, so you dont get the error with useUnifiedTopology anymore
client.connect((err) => {
	if (err) {
		throw err
	}
  db = client.db(process.env.DB_NAME);
});

app.use(express.static('static'))
app.use(express.urlencoded({extended: true}))
app.use('/static', express.static('static'))
app.set('view engine', 'ejs') // Makes sure we use EJS as a templating engine

// Render EJS to HTML
app.get('/allUsers', users)
app.get('/detail/:id/' + users._id + '', users)
app.get('/detail', users)
app.post('/', add, users)

app.get('/', (req, res, next) => {
	res.render('login.ejs')
});

app.get('/forgotPass', (req, res, next) => {
	res.render('forgotPass.ejs')
});

app.get('/register', (req, res, next) => {
	res.render('register.ejs')
});

app.get('/detail', (req, res, next) => {
	res.render('detail.ejs')
});

app.get('/detail/:id/', async (req, res, next) => {
	try {
		const profile = await db.collection('user').findOne({ _id: mongo.ObjectID(req.params.id) })	
		res.render('detail.ejs', {user: profile})
	} catch(err) {
		console.log(err);
	}
});

function users(req, res, next) {
	db.collection('user').find().toArray(done)

	function done(err, data) {
		if (err) {
			next(err)
		} else {
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
			res.redirect('/allUsers')
		}
	}
}

// login using username and password (not working/ workin on)
function login(req) {
	db.collection('user').findOne({
		username: req.body.username,
		password: req.body.password
	}).then(data => {
		if(data.username === req.body.username && data.password === req.body.password) {
			console.log('Welcome');
		} else {
			res.render('login', {error: 'password invalid'})
		}
	});
}

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))