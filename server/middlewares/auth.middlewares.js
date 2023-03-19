const { body } = require('express-validator');
const passport = require('passport');
const User = require('../models/Users');


// funciones para usarlas en los middlewares de validacion
// funcion para saber si ya se encuentra registrado un email
const findEmail = async (email) => {
    const user = await User.findOne({email});

    if(user) throw new Error('email existente');

    return true;
 }
// funcion para saber si ya se encuentra registrado un username
const findUsername = async (username) => {
    const user = await User.findOne({username});
    
    if(user) throw new Error('username existente');

    return true;
}

// middlewares que valida los datos enviados a la ruta
const signupValidators = [
	body('username').exists().withMessage('Username es requerido').bail()
					.isString().withMessage('Ingresa un username valido').bail()
					.custom(findUsername),

	body('email').exists().withMessage('Email es requerido').bail()
					.isEmail().withMessage('Ingresa un email valido').bail()
					.custom(findEmail),

	body('password').exists().withMessage('Password es requerido').bail()
					.isString().withMessage('Ingrese un password valida').bail()
					.isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
]

// funcion para saber si el token es valido
const auth = passport.authenticate('jwt', {session: false});

module.exports = {
    signupValidators,
    auth
}