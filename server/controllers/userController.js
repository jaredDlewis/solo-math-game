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
  res.locals.createUserResponse = null;
  for (const dbUser of res.locals.allUsernames) {
    if (req.body.username === dbUser.username) {
      res.locals.createUserResponse = 'This username is already in use. Please try another.';
      return next();
    }
  }
  if (!req.body.username || !req.body.password) {
    res.locals.createUserResponse = 'Please enter a valid username and password.';
    return next();
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
  res.locals.verifyResponse = null;
  if (!req.body.username || !req.body.password) {
    res.locals.verifyResponse = 'Please enter a valid username and password.';
    return next();
  }
  if (res.locals.user.length === 0) {
    res.locals.verifyResponse = 'The inputted username does not exist in our system. Please check your spelling or sign up.';
    return next();
  }
  bcrypt.compare(req.body.password, res.locals.user[0].password, (err, result) => {
    if (err) return next('Error in userController.verifyUser: ' + JSON.stringify(err));
    if (!result) {
      res.locals.verifyResponse = 'Incorrect password. Please try again.';
      return next();
    }
    return next();
  })
}

userController.getUserInfo = (req, res, next) => {
  const username = [req.body.username];
  const queryStr = 'SELECT * FROM users WHERE username = $1;';
  db.query(queryStr, username)
    .then((results) => {
      res.locals.user = results.rows;
      next();
    })
    .catch((err) => next({
      log: `ERROR: Error in userController.getUserInfo: ${err}`,
      message: { err: 'userController.getUserInfo: ERROR: Check server logs for details' }
    }))
}

module.exports = userController;