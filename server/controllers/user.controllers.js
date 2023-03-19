const { validationResult } = require("express-validator");
const ac = require("../middlewares/roles");
const User = require("../models/Users");

// funcion que devuelve la lista de usuarios registrados
const index = async (req, res) => {
  // validar si el susuario tiene permisos para acceder a la funcion
  if(!ac.can(req.user.role).readAny('user').granted) return res.status(401).json('Unauthorized');

  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// funcion que muestra los datos de un usuario
const showUser = async (req, res) => {

  const permission = ac.can(req.user.role).readAny('user');
	const verifyId = req.user._id.toString() === req.params.id ? true : false;

	if(!permission.granted && !verifyId) return res.status(401).json('Unauthorized');

  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).json("User no found");
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// funcion para crear usuario
const createUser = async (req, res) => {

  if(!ac.can(req.user.role).createAny('user').granted) return res.status(401).json('Unauthorized');

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    const newUser = new User({ username, email, password });

    await newUser.save();

    res.status(201).json("success");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// funcion para editar los datos de un usuario
const updateUser = async (req, res) => {

  const permission = ac.can(req.user.role).updateAny('user');
	const verifyId = req.user._id.toString() === req.params.id ? true : false;
	if(!permission.granted && !verifyId) return res.status(401).json('Unauthorized');

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const update = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({msg: "Usuario actualizado", update});

  } catch (err) {
    console.log(err);
    res.status(400).json(err.reason.toString());
  }
};

// funcion para borrar los datos de un usuario
const deleteUser = async(req, res) => {

  const permission = ac.can(req.user.role).deleteAny('user');
	if(!permission.granted) return res.status(401).json('Unauthorized');

  try{

		await User.findByIdAndUpdate(req.params.id, {state: false}, {new: true});

		return res.status(200).json('User eliminado');

	}
	catch(err){
		console.log(err)
		res.status(400).json(err);
	}
};

module.exports = {
  index,
  showUser,
  createUser,
  updateUser,
  deleteUser,
};
