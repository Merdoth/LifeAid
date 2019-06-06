import express from 'express';
import mongoose from 'mongoose';
import expressValidator from 'express-validator';
import logger from 'morgan';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import next from 'next';
import session from 'express-session';
import uuid from 'uuid';
import Auth0Strategy from 'passport-auth0';
import passport from 'passport';
import secured from './middlewares/secured';
import routes from './routes';
import configDB from './config/database';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;
const server = express(); // Set up the express app

dotenv.config();
mongoose.Promise = global.Promise;
let compiler;

// Configure express-session
const sess = {
    cookie: {},
    resave: false,
    saveUninitialized: true,
    secret: uuid(),
};

// Setup a default catch-all route that sends back a welcome message in JSON format.
if (process.env.NODE_ENV === 'production') {
    sess.cookie.secure = true;
    mongoose.connect(configDB.url_production, { useNewUrlParser: true });
} else if (process.env.NODE_ENV === 'test') {
    mongoose.connect(configDB.url_test, { useNewUrlParser: true });
} else {
    mongoose.connect(configDB.url, { useNewUrlParser: true });
}

// Log requests to the console.
server.use(session(sess)); // auth0 express session
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(expressValidator());
server.use(express.static(path.join(__dirname, './../public')));
server.use('/api-docs', express.static(path.join(__dirname, './../api-docs')));

// Configure Passport to use Auth0
/* eslint func-names: 0 */
/* eslint arrow-body-style: 0 */
/* eslint prefer-arrow-callback: 0 */
/* eslint consistent-return: 0 */

const strategy = new Auth0Strategy(
    {
        callbackURL: `http://localhost:${port}/callback`,
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        domain: process.env.DOMAIN,
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
        return done(null, profile);
    }
);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

server.use(passport.initialize());
server.use(passport.session());

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    server.use(webpackDevMiddleware(compiler, {
        open: false,
    }));
    server.use(webpackHotMiddleware(compiler));
}

app.prepare().then(() => {
    server.use('/api/v1', routes);

    server.get('/login', passport.authenticate('auth0', {
        scope: 'openid email profile',
    }), (req, res) => {
        res.redirect('/');
    });

    server.get('/callback', function (req, res, nextVal) {
        passport.authenticate('auth0', function (err, user) {
            if (err) { return nextVal(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function (error) {
                if (error) { return nextVal(err); }
                return res.redirect('/user');
            });
        })(req, res, nextVal);
    });

    server.get('/api/user', secured(), function (req, res) {
        const { ...userProfile } = req.user;
        return res.status(201).send({
            id: userProfile.id,
            picture: userProfile.picture,
            username: userProfile.nickname,
        });
    });

    server.get('*', (req, res) => {
        handle(req, res);
        // res.sendFile(path.join(__dirname, '../client/index.html'));
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`); /* eslint no-console:0 */
    });
}).catch(ex => {
    console.error(ex); /* eslint no-console:0 */
    process.exit(1);
});
