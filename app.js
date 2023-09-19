const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const express = require('express');

const dataRoute = require('./src/routes/routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use('/data', dataRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	const error = new Error('Not found')
	error.status(404)
	next(error)
})

app.use((error, req, res, next) => {
	res.status(error.status || 500)
	res.json({
		error: {
			message: error.message,
		},
	})
})

module.exports = app;