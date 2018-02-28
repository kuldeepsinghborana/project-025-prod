var mongoose = require('mongoose');
let jwt = require('../../helper/jwt');
var User = mongoose.model('User');
var Notification = mongoose.model('Notification');
var bcrypt = require('bcrypt');
var imgur = require('imgur');

// POST /api/users/register
module.exports.register = function (req, res) {
  console.log('registering user');

  if (req.body.email && req.body.password) {
    var userData = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      // passwordConf: req.body.passwordConf,
      phoneNumber: req.body.handphoneNumber,
      companyname: req.body.companyname
    }
    User.create(userData, function (err, user) {
      if (err) {
        console.log("Error creating user", err)
        // res.status(400).render('sessions/register', { error: err });
        let response = {
          status: 400,
          message: "FAILED"
        }
        return res.status(200).json(response);
      } else {
        // console.log("User created ", user);
        // res.status(201).render("sessions/login", { message: "Registration Successful. Please login." });
        let response = {
          status: 200,
          message: "SUCCESS"
        }
        return res.status(200).json(response);
      }
    });
  } else {
    console.log('Insufficient data. Cannot register!');
    // res.status(400).render('sessions/register', { error: 'Insufficient data. Cannot register!' });
    let response = {
      status: 400,
      message: 'Insufficient data. Cannot register!'
    }
    return res.status(400).json(response);
  }
};

// POST /api/users/login
module.exports.login = function (req, res) {
  console.log('logging in user');

  let email = req.body.email;
  let password = req.body.password;

  User
    .findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        console.log(err)
        // res.status(400).render('sessions/login', { error: err });
        let response = {
          status: 400,
          message: 'Something went wrong please try again'
        }
        return res.status(400).json(response);
      } else {
        if (user && user != null) {
          if (user && bcrypt.compareSync(password, user.password)) {
            // set req.session.user for server
            let secretToken = jwt.createSecretToken({ uid: user._id });
            // req.session.userId = user._id;
            // req.session.user = user;
            // req.session.carrots = req.session.user.carrots;
            let response = {
              status: 200,
              token: secretToken
            }
            return res.status(200).json(response);
            // Notification.find({ notifieeId: user._id, seen: false }, function (err, notifications) {
            //   if (err) {
            //     console.error(err)
            //   }

            //   req.session.stats = { notificationsCount: notifications.length };
            //   // if (user.userType === "admin") {
            //   //   req.flash('message', 'Admin login Successful');
            //   //   res.status(301).redirect('/admin');
            //   // } else {
            //   //   req.flash('message', 'Employer login Successful');
            //   //   res.status(301).redirect('/employer');
            //   // }
            // });

          } else {
            // reset session if user not found
            // req.session.destroy();
            // res.status(401).render('sessions/login', { error: 'Unauthorized ! username and/or password does not match.' });
            let response = {
              status: 400,
              message: 'Unauthorized ! username and/or password does not match.'
            }
            return res.status(400).json(response);
          }
        } else {
          let response = {
            status: 400,
            message: 'You are not registered with us'
          }
          return res.status(400).json(response);
        }
      }
    });
};

// GET /logout
module.exports.logout = function (req, res, next) {
  console.log('logging out user -->' + req.session);
  if (req.session) {
    console.log('...deleting session')
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        next(err);
      } else {
        res.clearCookie('userId');
        res.redirect('/');
      }
    });
  }
};

// POST /api/users/update
module.exports.updateUser = function (req, res) {
  var userId = req.session.user._id;
  var current_user = req.session.user;
  console.log('UPDATE user with _id: ' + userId);
  var formData = req.body;
  var updateParams = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    companyName: formData.companyName,
    profilePic: req.file ? req.file.filename : current_user.profilePic || null
  };

  if (formData.password.length > 0 && formData.passwordConf.length > 0) {
    if (formData.password !== formData.passwordConf) {
      err = "Password does not match with Password confirmation";
      req.flash('error', err);
      return res.redirect(_getRedirectionPath(current_user.userType));
    }
    updateParams.password = formData.password;
  } else {
    req.flash('error', 'Please enter password and password confirmation to update your settings');
    return res.redirect(_getRedirectionPath(current_user.userType));
  }

  User
    .findById(userId)
    .exec(function (err, user) {
      if (err) {
        console.log("User not found: ", err)
        res.locals.error = 'User not found ' + err;
        res.redirect(_getRedirectionPath(current_user.userType));
      }
      console.log('Found user: ', user._id);
      user.set(updateParams);
      user.save(function (err, user) {
        if (err) {
          console.log("Error updating user")
          req.flash('error', 'Error updating user');
          res.redirect(req.header('Referer'));
        }
        req.flash('info', 'Account updated sucessfully');
        if (user.profilePic) {
          // upload profile pic
          imgur.uploadFile('public/uploads/' + user.profilePic).then(function (json) {
            remote_url = json.data.link;
            User.findByIdAndUpdate(user._id, { $set: { profilePic: remote_url } }, { new: true }, function (err, user) {
              if (err) {
                console.log("Something wrong when updating data!");
                res.redirect(_getRedirectionPath(current_user.userType));
              }
              console.log('Updated user', user);
              // reset session user to reflect changes in UI
              req.session.user = user;
              res.redirect(_getRedirectionPath(current_user.userType));
            });
          })
            .catch(function (err) {
              console.error(err.message);
              res.redirect(_getRedirectionPath(current_user.userType));
            });
        } else {
          // reset session user to reflect changes in UI
          req.session.user = user;
          res.redirect(_getRedirectionPath(current_user.userType));
        }
      });
    });
}

// HELPER methods
var _getRedirectionPath = function (user_type) {
  var tmp = '/';
  if (user_type == 'admin') {
    tmp = '/admin/settings';
  } else if (user_type == 'employer') {
    tmp = '/employer/settings';
  }
  return tmp;
}

