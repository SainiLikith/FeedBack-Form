const express = require("express")
const session = require("express-session")
const passport = require('passport')
const dotenv = require("dotenv")
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
 

passport.use(new GoogleStrategy({
    clientID:    "547503963304-ii3r8apnvpc49gq1ohqr3e1se0gqfsd0.apps.googleusercontent.com" ,
    clientSecret: "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",
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