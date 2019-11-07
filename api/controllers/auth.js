const router = require('express').Router();
const passport = require('../middleware/authentication');
const { User } = require('../models');

//customer signup route
router.post('/signup/customer', (req, res, next) => {
  const {email, password} = req.body;
  
  User.create({
    email,
    password,
  })
  .then(user => {
    req.login(user, () => res.status(201).json(user));
  })
  .catch(err => {
    console.error(err);
    next();
  });
});

//restaurant signup route
router.post('/signup/restaurant', (req, res, next) => {
  const { email, password, } = req.body;

  User.create({
    email,
    password,
    restaurantOwner: true,
  })
  .then(user => {
    req.login(user, () => res.status(201).json(user));
  })
  .catch(err => {
    console.error(err);
    next();
  })
});

//logins in
router.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.json(req.user);
});

//logsout
router.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Logout sucessful' });
});

module.exports = router;