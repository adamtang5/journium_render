// Import packages
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

// isProduction variable
const { environment } = require('./config');
const isProduction = environment === 'production';

// Initialize Express app
const app = express();

// Routes
const routes = require('./routes');

// Use morgan for logging in dev environment
app.use(morgan('dev'));

// Add middlewares
app.use(cookieParser());
app.use(express.json());

// Security middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin"
    })
);

// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        }
    })
);

app.use(routes);    // Connect all the routes

module.exports = app;
