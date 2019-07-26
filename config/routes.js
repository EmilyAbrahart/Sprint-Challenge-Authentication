const axios = require('axios');
let bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');

const { authenticate } = require('../auth/authenticate');

module.exports = server => {
	server.post('/api/register', register);
	server.post('/api/login', login);
	server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 12);
	user.password = hash;

	Users.add(user)
		.then(newUser => {
			res.status(201).json(newUser);
		})
		.catch(error => {
			res.status(500).json({
				message: error
			});
		});
}

function login(req, res) {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = generateToken(user);

				res.status(200).json({
					message: `Welcome ${user.username}!`,
					token
				});
			} else {
				res.status(401).json({ message: 'Invalid credentials' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
}

function getJokes(req, res) {
	const requestOptions = {
		headers: { accept: 'application/json' }
	};

	axios
		.get('https://icanhazdadjoke.com/search', requestOptions)
		.then(response => {
			res.status(200).json(response.data.results);
		})
		.catch(err => {
			res.status(500).json({ message: 'Error Fetching Jokes', error: err });
		});
}

// JWT Generation
function generateToken(user) {
	const secret = process.env.JWT_SECRET;

	const payload = {
		sub: user.id,
		username: user.username
	};
	const options = {
		expiresIn: '1d'
	};

	return jwt.sign(payload, secret, options);
}
