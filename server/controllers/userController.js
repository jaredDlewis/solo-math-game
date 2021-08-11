const db = require('../models/mathGameModels.js');
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userController = {};

userController.getAllUsernames = (req, res, next) => {
  const queryStr = 'SELECT username FROM users;';
  db.query(queryStr)
    .then((results) => {
      res.locals.allUsernames = results.rows;
      return next();
    })
    .catch((err) => next({
      log: `ERROR: Error in userController.getAllUsers: ${err}`,
      message: { err: 'userController.getAllUsers: ERROR: Check server logs for details' }
    }))
}

userController.createUser = (req, res, next) => {
  for (const dbUser of res.locals.allUsernames) {
    if (req.body.username === dbUser.username) {
      return res.status(409).json('This username is already in use. Please try another.');
    }
  }
  if (!req.body.username || !req.body.password) {
    return res.status(200).json('Please enter a valid username and password.');
  }
  bcrypt.hash(req.body.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next('Error in userController: ' + JSON.stringify(err));
    const newUserInfo = [req.body.username, hash];
    const queryStr = 'INSERT INTO public.users (username, password) VALUES ($1, $2);';
    db.query(queryStr, newUserInfo)
      .then(() => {
        return next();
      })
      .catch((err) => next({
        log: `ERROR: Error in userController.createUser: ${err}`,
        message: { err: 'userController.createUser: ERROR: Check server logs for details' }
      }));
  })
}

userController.verifyUser = (req, res, next) => {
  const username = [req.body.username];
  const queryStr = 'SELECT users.password FROM users WHERE username = $1;';
  db.query(queryStr, username)
    .then((results) => {
      if (results.rows.length === 0) {
        res.locals.verifyResponse = 'The inputted username does not exist in our system. Please check your spelling or sign up.'
      }
      bcrypt.compare(req.body.password, results.rows.password, (err, result) => {
        if (err) return next('Error in userController.verifyUser: ' + JSON.stringify(err));
        if (!result) {
          res.locals.verifyResponse = 'Incorrect password. Please try again.';
          return next();
        }
        res.locals.verifyResponse = 'successful login';
        return next();
      })
    })
    .catch((err) => next({
      log: `ERROR: Error in userController.verifyUser: ${err}`,
      message: { err: 'userController.verifyUser: ERROR: Check server logs for details' }
    }))
}

module.exports = userController;