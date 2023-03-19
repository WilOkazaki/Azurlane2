const { body } = require("express-validator");

const multer = require("multer");
const {extname} = require("path");

// middleware que valida y guarda el archivo de imagen
const uploadImage = multer({
  //funcion que establece la ruta de guardado de la imagen 
  storage: multer.diskStorage({
    destination: "public/images/movies",
    filename: (req, file, cb) => {
      const extension = extname(file.originalname);
      const name = file.originalname.split(extension)[0];
      cb(null, `${name}-${Date.now()}${extension}`);
    },
  }),
//   funcion para validar que el archivo sea una imagen
  fileFilter: (req, file, cb) => {
    if(["image/jpeg", "image/png"].includes(file.mimetype)) cb(null, true);
    else cb(new Error("solo acepta formato jpg y png"));

  },
  
}).single("imagen");

// funcion que valida si el rol ingresado es correcto
const verifyGenero = (genero) => {
  if (
		genero === "acción" ||
		genero === "aventuras" ||
		genero === "ciencia ficción" ||
		genero === "comedia" ||
		genero === "documental" ||
		genero === "fantasía" ||
		genero === "musical" ||
		genero === "suspenso" ||
		genero === "terror"
  ) {
	return true;
  }

  throw new Error("Genero incorrecto");
};

// Middlewares que validan los datos del formulario al crear una pelicula
const createValidator = [
  body("titulo")
		.exists().withMessage("El titulo es requerido").bail()
		.notEmpty().trim().withMessage("El titulo no debe estar vacio").bail()
		.isString().withMessage("Titulo debe ser String"),

  body("genero")
		.exists().withMessage("El genero es requerido").bail()
		.notEmpty().trim().withMessage("El genero no debe estar vacio").bail()
		.isString().withMessage("Genero debe ser String")
		.custom(verifyGenero),

	body("sinopsis")
		.exists().withMessage("Sinopsis requerido").bail()
		.notEmpty().trim().withMessage("Sinopsis no debe estar vacio").bail()
		.isString().withMessage("El campo Sinopsis debe ser String"),

	body("publicacion")
		.exists().withMessage("La publicación es requerida").bail()
		.notEmpty().trim().withMessage("La publicación no debe estar vacia").bail()
		.isNumeric().withMessage("Ingrese un año de publicación en formato numerico"),

	body("actores")
		.exists().withMessage("Actores requerido").bail()
		.notEmpty().trim().withMessage("Actores no debe estar vacio").bail()
		.isString().withMessage("El campo actores debe ser String"),

	body("direccion")
		.exists().withMessage("Direccion requerido").bail()
		.notEmpty().trim().withMessage("Direccion no debe estar vacio").bail()
		.isString().withMessage("El campo Direccion debe ser String"),

	body("productora")
		.exists().withMessage("Productora requerido").bail()
		.notEmpty().trim().withMessage("Productora no debe estar vacio").bail()
		.isString().withMessage("El campo Productora debe ser String"),
];

// Middlewares que validan los datos del formulario al editar una pelicula
const updateValidator = [
  body("titulo")
		.optional().bail()
		.isString().withMessage("Titulo debe ser String")
		.notEmpty().trim().withMessage("El titulo no debe estar vacio").bail(),

  body("genero")
		.optional().bail()
		.notEmpty().trim().withMessage("El genero no debe estar vacio").bail()
		.isString().withMessage("Genero debe ser String")
		.custom(verifyGenero),

	body("sinopsis")
		.optional().bail()
		.notEmpty().trim().withMessage("Sinopsis no debe estar vacio").bail()
		.isString().withMessage("El campo Sinopsis debe ser String"),

	body("publicacion")
		.optional().bail()
		.notEmpty().trim().withMessage("La publicación no debe estar vacia").bail()
		.isNumeric().withMessage("Ingrese un año de publicación en formato numerico"),

	body("actores")
		.optional().bail()
		.notEmpty().trim().withMessage("Actores no debe estar vacio").bail()
		.isString().withMessage("El campo actores debe ser String"),

	body("direccion")
		.optional().bail()
		.notEmpty().trim().withMessage("Direccion no debe estar vacio").bail()
		.isString().withMessage("El campo Direccion debe ser String"),

	body("productora")
		.optional().bail()
		.notEmpty().trim().withMessage("Productora no debe estar vacio").bail()
		.isString().withMessage("El campo Productora debe ser String"),
];

module.exports = {
	createValidator,
	updateValidator,
	uploadImage
}
