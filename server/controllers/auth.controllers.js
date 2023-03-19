// importacion de dependencias y modelo de usuario
const jwt = require("jsonwebtoken"); 
const { validationResult } = require("express-validator");
const User = require("../models/Users");

// funcion para crear token jwt
function createToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, username: user.username },
    process.env.JWT_KEY,
    {
      expiresIn: 86400,
    }
  );
}

// funcion para crear un usuario
const singUp = async (req, res) => {

  // validar si hay errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  const newUser = new User({ username, email, password });

  await newUser.save();

  return res.status(201).json(newUser);
};

// controlador para iniciar sesion
const singIn = async (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).json({ msg: "envia email y password" });

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ msg: "email no registrado" });

  if (!user.state) return res.status(400).json({ msg: "el usuario se encuentra eliminado" });

  const isMatch = await user.comparePassword(req.body.password);
  if (!isMatch)
    return res.status(400).json({ msg: "contraseña incorrecta" });

  return res.status(200).json({ token: createToken(user) });
};

module.exports = {
  singUp,
  singIn,
};
