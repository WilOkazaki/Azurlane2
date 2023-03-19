const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

// modelo de datos para almacenar los usuarios
const UserSchema = Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    state: {
        type: Boolean,
        default: "true",
      },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// funcion para encriptar la contraseña luego de que se almacene el usuario en la bd
UserSchema.pre('save', async function(next){
	const user = this;
	if(!user.isModified('password')) return next();

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(user.password, salt);
	user.password = hash;
});

// funcion para encriptar la nueva contraseña luego de que se edite los datos de un usuario
UserSchema.pre('findOneAndUpdate', async function(next){
	const user = this._update;

	if (user.password) {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(user.password, salt);
		user.password = hash;
	}else{
		next();
	}

	next();
});

// funcion que hace que no se muestre la contraseña en los datos de los usuarios
UserSchema.methods.toJSON = function () {
  const {password, ...user} = this.toObject();
  return user;
}
// funcion que compara contraseñas encriptadas
UserSchema.methods.comparePassword  = async function (password){
	return await bcrypt.compare(password, this.password);
}



module.exports = model('User', UserSchema);
