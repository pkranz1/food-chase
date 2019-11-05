const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const path = require('path');
// const db = require('./models');
const TWO_HOURS = 1000 * 60 * 60 * 2
const {
	PORT = 3000,
	NODE_ENV = 'developmet',
	SESS_NAME = 'sid',
	SESS_SECRET = 'adaa2315fd',

	SESS_LIFETIME = TWO_HOURS
} = process.env
const IN_PROD = NODE_ENV === "production"

// TODO DB
const users = [
	{id: 1, name: "Jose", email : "jose@gmail.com", password: 'pass'},
	{id: 2, name: "Rafael", email : "rafa@gmail.com", password: 'pass'},
	{id: 3, name: "Elaine", email : "ela@gmail.com", password: 'pass'}

]
const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(session({
	name: SESS_NAME,
	resave: false,
	saveUninitialized: false,
	secret: SESS_SECRET,
	cookie: { 
		maxAge: SESS_LIFETIME,
		sameSite: true,
		secure: IN_PROD

	}
}))

const redirectLogin = (req,res,next) => {
	if (!req.session.userId){
		res.redirect('/login')
	} else {
		next()
	}
}

const redirectHome = (req,res,next) => {
	if (req.session.userId){
		res.redirect('/home')
	} else {
		next()
	}
}

app.use((req, res, next)=> {
	const { userId } = req.session
	if(userId) {
		res.locals.user = users.find(
			user => user.id === userId
		)
	}
	next()
})

app.get('/', (req, res)=> {
	const userId = 1
// console.log(userId)
	res.send(`
		<h1>Welcome!<h1>
		${userId ? `
			<a href= '/home'>Home</a>
			<form method='post' action ='/logout'>
				<button>Logout</button>
			</form>

		` : `

		<a href= '/login'>Login</a>
		<a href= '/signup'>Signup</a>

		`}
	`)

})

app.get('/home', redirectLogin, (req, res)=> {
	const { user } = res.locals


	res.send(`
		<h1>Home</h1>
		<a href="/">Main</a>
		<ul>
			<li>Name: ${user.name}</li>
			<li>Email: ${user.email}</li>
		</ul>
	`)

})

app.get('/login',redirectHome, (req, res)=> {
	res.send(`
		<h1>Login</h1>
		<form method = 'post' action ='/login'>
			<input type='email' name='email' placeholder='Email' required />
			<input type='password' name='password' placeholder='password' required />
			<input type='submit'/>
		</form>
		<a href ='/signup'>Signup</a>

	`)

	// req.session.userId = 

})

app.get('/signup', (req, res)=> {
	res.send(`

		<h1>Signup</h1>
		<form method = 'post' action ='/signup'>
			<input name = 'name' placeholder = 'Name' required />
			<input type='email' name='email' placeholder='Email' required />
			<input type='password' name='password' placeholder='password' required />
			<input type='submit'/>
		</form>
		<a href ='/login'>Login</a>
	`)
	
})

app.post('/login', redirectHome, (req, res)=> {

	const {email, password} = req.body

	if(email && password){
		const user = users.find(
			user => user.email === email && user.password === password
			)

		if(user) {
			req.session.userId = user.id
			return res.redirect('/home')
		}
	}

	res.redirect('/login')
})

app.post('/signup', redirectHome, (req, res)=> {

	const {name, email, password} = req.body

	if (name && email && password) { //TODO validation
		const exists = users.some(
			user => user.email === email
		)

		if(!exists) {
			const user = {
				id: users.length + 1,
				name,
				email,
				password //TODO Hash
			}

			users.push(user)

			req.session.userId = user.id

			return res.redirect('/home')
		}
	}

	res.redirect('/signup') // TODO querystring errors
	
})

app.post('/logout', redirectLogin, (req, res)=> {
	req.session.destroy(err => {
		if(err){
			return res.redirect('/home')
		}

		res.clearCookie(SESS_NAME)
		res.redirect('/login')
	})
	
})
// const PORT = process.env.PORT || 8000;


// this lets us parse 'application/json' content in http requests
// app.use(bodyParser.json())

// add http request logging to help us debug and audit app use
// const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
// app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
// app.use('/api', require('./controllers'));

// for production use, we serve the static react build folder
// if(process.env.NODE_ENV==='production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
//   app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//   });
// }

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
// db.sequelize.sync({ force: false });

// start up the server
app.listen(PORT, () => console.log(`Listening on ${PORT}`));