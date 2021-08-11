const db = require('../models/mathGameModels.js');
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = (req, res, next) => {
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