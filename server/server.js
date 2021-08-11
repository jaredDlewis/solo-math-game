const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./controllers/userController.js');

// parse inputs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// send bundle.js
app.use('/build', express.static(path.join(__dirname, '../build')));

// Send entrypoint
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// Handle signup requests
app.post('/signup', userController.getAllUsernames, userController.createUser, (req, res) => {
  // what should happen here on successful sign up?
  return res.status(200).send();
})

// Handle login requests
app.post('/login', userController.verifyUser, (req, res) => {
  // what should happen here on successful log in?
  return res.status(200).json(res.locals.verifyResponse)
});

// Page Not Found
app.use((req, res) => {
  return res.status(404).send('Error 404: Page Not Found');
})

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);