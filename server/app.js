/* eslint no-restricted-globals: 0 */
/* eslint indent: 0 */
/* eslint no-tabs: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-mixed-spaces-and-tabs: 0 */
/* eslint arrow-body-style:0 */
const express = require('express');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const logger = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const next = require('next');
const devConfig = require('../webpack.config.babel');
const routes = require('./routes');
const configDB = require('./config/database'); // database config

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;
const server = express(); // Set up the express app
dotenv.config();

mongoose.Promise = global.Promise;
let compiler;

// Setup a default catch-all route that sends back a welcome message in JSON format.
if (process.env.NODE_ENV === 'production') {
	mongoose.connect(configDB.url_production, { useNewUrlParser: true });
} else if (process.env.NODE_ENV === 'test') {
	mongoose.connect(configDB.url_test, { useNewUrlParser: true });
  	compiler = webpack(devConfig);
} else {
  	mongoose.connect(configDB.url, { useNewUrlParser: true });
  	compiler = webpack(devConfig);
}

// Log requests to the console.
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(expressValidator());
server.use(express.static(path.join(__dirname, './../public')));
server.use('/api-docs', express.static(path.join(__dirname, './../api-docs')));

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
	server.use(webpackDevMiddleware(compiler, {
		open: false,
	  	publicPath: devConfig.output.publicPath,
  	}));
  	server.use(webpackHotMiddleware(compiler));
}

// module.exports = app;

app.prepare().then(() => {
    server.get('*', (req, res) => {
    	return handle(req, res);
    	// Not sure this is needed anymore, since next does the job
    	// res.sendFile(path.join(__dirname, '../client/index.html'));
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
}).catch(ex => {
    console.error(ex); /* eslint no-console:0 */
    process.exit(1);
});

module.exports = app;
