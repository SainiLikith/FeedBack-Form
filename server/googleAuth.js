const express = require("express")
const session = require("express-session")
const passport = require('passport')
const dotenv = require("dotenv")
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
 

passport.use(new GoogleStrategy({
    clientID:clientId,
    clientSecret:clientSecret,
    callbackURL: "http://localhost:8085/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // user.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    console.log(profile)
    return  done(null, profile)
  }
));
passport.serializeUser(function(user, done){
    done(null, user);
  })


  passport.deserializeUser(function(user, done){
    done(null, user);
  }) 