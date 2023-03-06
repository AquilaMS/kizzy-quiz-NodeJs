const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const User = require('../models/User');
const authService = require('../service/Auth')

let opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'my super secret key';

const strategy = new JwtStrategy(opts, (payload, done)=>{
    authService.GetUserById({id: payload.id})
    .then(user =>{
        console.log(payload)
        if (user) done(null, payload)
        else done(null, false)
    }).catch(error => {
      done(error, false)
    })
})

passport.use(strategy)
module.exports = () => {
    return {
        authenticate: () => passport.authenticate('jwt', { session: false })
    }
}