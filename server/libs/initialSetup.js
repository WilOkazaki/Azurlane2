// establece las funciones iniciales
const User = require("../models/Users");

// funcion para crear un usuario administrador en caso de no existir
const createAdmin = async () => {
  try {
    const users = await User.find({ role: "admin" });

    if (users.length > 0) return;

    const newUser = new User({
      username: "admin",
      email: "admin@mail.com",
      password: "12345678",
      role: "admin",
    });

    await newUser.save();
  } catch (e) {
    console.error(e);
  }
};

module.exports = createAdmin;
