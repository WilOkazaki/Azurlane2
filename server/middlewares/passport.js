const { Strategy, ExtractJwt} = require('passport-jwt');

// funcion para crear el token con los datos del usuario que inicia sesion 
const User = require('../models/Users');

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_KEY
}

const strategy =  new Strategy(opts, async (payload, done) => {

	try{
		const user = await User.findById(payload.id);

		if (user) {
			return done(null, user);
		}

		return done(null, false);
	}catch(error){
		console.log(error)
	}
})

module.exports = strategy;