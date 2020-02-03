const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'someothersecretasdefault';
const middleware = require('./middleware');

//const passport = require('passport');
// Load User model
const User = require('../models/User');
//const { forwardAuthenticated } = require('../config/auth');


router.post('/signup', (req, res) => {
  const { name, email, password, password2 } = req.body;
        const newUser = new User({ ...req.body });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            console.log("register" , newUser)
            newUser
              .save()
              .then(user => {
                console.log( 'You are now registered and can log in');
                 res.status(200).send({data:user});
              })
              .catch(err => console.log(err));
          });
        });
});

// Login
// router.post('/login', (req, res, next) => {
//   console.log("REQQQQQQQQQQ", req.body)
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
//   })(req, res, next);
// });

router.post('/login', async (req, res) => {
    console.log("logib calle", req.body)
    const errors = {};
    const email = req.body.email
    const password = req.body.password;
    const user = await User.findOne({ email }).select("+password");
    console.log("useruseruser" , user)
    // return if there was no user with this username found in the database
    if (!user) {
        errors.message = "No Account Found";
        return res.status(400).json(errors);
    }
    isMatch = await bcrypt.compare(password, user.password);
    console.log("isMatchisMatch", isMatch)
    // return 400 if password does not match
    if (!isMatch) {
        errors.message = "Password is incorrect";
        return res.status(400).json(errors);
    }
    const payload = {
        id: user._id,
        username: user.username
    };
    token = await jwt.sign(payload, secret, { expiresIn: 36000 });
    // return 500 if token is incorrect
    if (!token) {
        return res.status(500).json({ error: "Error signing token", raw: err });
    }
    console.log("Success login")
    return res.json({
        success: true,
        token: `${token}`,
        user:{
            username:user.username,
            email:user.email,
        } 
    });
});


router.get('/me/:user', middleware.checkToken,  async function(req, res, next) {
    console.log("Profile calling...",req.params.user)
    const email = req.params.user
    const dbUser = await User.findOne({ email });
    res.status(200).json(dbUser);
});


// Logout
router.get('/logout', (req, res) => {
  localStorage.removeItem('id_token');
  localStorage.removeItem('loggedIn_email');
  res.redirect('/login');
});



module.exports = router;
