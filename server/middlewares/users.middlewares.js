const { body } = require('express-validator');

const User = require ('../models/Users');

const findEmail = async (email) => {
    const user = await User.findOne({email});

    if(user) throw new Error('Email existente');

    return true;
 }

const findUsername = async (username) => {
    const user = await User.findOne({username});
    
    if(user) throw new Error('Usuario existente');

    return true;
}

const verifyRole = (role) => {
	if (role === 'admin' || 
		role === 'user' ) {
		return true;
	}

	throw new Error('el rol es incorrecto');
}

const createValidator = [
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

const updateValidator = [
	body('username').optional()
					.isString().withMessage('Ingresa un username valido').bail()
					.custom(findUsername),

	body('email').optional()
				.isEmail().withMessage('Ingresa un email valido').bail()
				.custom(findEmail),

	body('password').optional()
					.isString().withMessage('Ingrese un password valida').bail()
					.isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),

	body('role').optional()
				.isString().withMessage('Rol debe ser un string').bail()
				.custom(verifyRole)
]

module.exports = {
    createValidator,
    updateValidator
}