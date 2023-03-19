
const { validationResult } = require("express-validator");
const ac = require("../middlewares/roles");
const Movie = require("../models/Movies");
const Reviews = require("../models/Reviews");
const fs = require("fs").promises;

// controlador que devuelve la lista de peliculas
const index = async (req, res) => {
  try {
    const movies = await Movie.find({ estatus: true });
    res.status(200).json(movies);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// controlador que devuelve los datos de una pelicula
const showMovie = async (req, res) => {
  try {
    const movies = await Movie.findById(req.params.movieId);
    res.status(200).json(movies);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// controlador que recibe los datos para crear registro en la coleccion de peliculas
const createMovie = async (req, res) => {
  // verificar si el usuario tiene permisos para esta accion
  if (!ac.can(req.user.role).createAny("movie").granted)
    return res.status(401).json("Unauthorized");

  try {
    const errors = validationResult(req);
    // validar si hay errores, se usa el file system (fs) para elimiar la imagen creada en caso de error
    if (!errors.isEmpty()) {
      await fs.unlink(`./${req.file.destination}/${req.file.filename}`);
      return res.status(400).json({ errors: errors.array() });
    }

    // ingresar en el body la ruta de la imagen
    req.body.imagen = `/images/movies/${req.file.filename}`;

    // se instacia una variable con el modelo de Movies y los datos de la pelicula
    const newMovie = new Movie(req.body);

    await newMovie.save();

    res.status(201).json(newMovie);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// controlador para editar los datos de una pelicula
const updateMovie = async (req, res) => {
  if (!ac.can(req.user.role).updateAny("movie").granted)
    return res.status(401).json("Unauthorized");

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const update = await Movie.findByIdAndUpdate(req.params.movieId, req.body, {
      new: true,
    });

    return res
      .status(200)
      .json({ msg: "Datos de pelicula actualizados", update });
  } catch (err) {
    console.log(err);
    res.status(400).json(err.reason.toString());
  }
};

// controlador para editar la imagen de una pelicula
const updatePosterMovie = async (req, res) => {
  if (!ac.can(req.user.role).updateAny("movie").granted)
    return res.status(401).json("Unauthorized");

  try {
    console.log(req.file);
    const imagen = `/images/movies/${req.file.filename}`;
    const update = await Movie.findByIdAndUpdate(
      req.params.movieId,
      { imagen: imagen },
      { new: true }
    );

    return res
      .status(200)
      .json({ msg: "Datos de pelicula actualizados", update });
  } catch (err) {
    console.log(err);
    res.status(400).json(err.reason.toString());
  }
};

// funcion para eliminar una pelicula
const deleteMovie = async (req, res) => {
  const permission = ac.can(req.user.role).deleteAny("movie");
  if (!permission.granted) return res.status(401).json("Unauthorized");

  try {
    await Movie.findByIdAndUpdate(
      req.params.movieId,
      { estatus: false },
      { new: true }
    );

    return res.status(200).json("Movie Delete");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// funcion que devuelve una pelicula con su lista de reviews
const showReviews = async (req, res) => {
  try {
    const data = {
      movie: await Movie.findOne({ _id: req.params.movieId }),
      reviews: await Reviews.find({ movieId: req.params.movieId }),
    };

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// funcion para crear un review a una pelicula
const createReview = async (req, res) => {
  try {
    if (req.body.review.trim() == "")
      return res
        .status(400)
        .json({ msg: "el campo review no debe estar vacio" });

    const movieId = req.params.movieId;
    const userId = req.user._id;
    const data = { movieId: movieId, userId: userId, review: req.body.review };
    const newReview = new Reviews(data);
    await newReview.save();
    return res.status(201).json(newReview);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// funcion para eliminar un review de una pelicula
const deleteReview = async (req, res) => {
  try {
    const review = await Reviews.findOne({ _id: req.params.reviewId });

    const validaUser = req.user._id.toString() == review.userId ? true : false;
    const permission = ac.can(req.user.role).deleteAny("review");
    if (!permission && !validaUser) return res.status(401).json("Unauthorized");

    await Reviews.findByIdAndDelete(req.params.reviewId);

    res.status(200).json({ msg: "review eliminada" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports = {
  index,
  showMovie,
  createMovie,
  updateMovie,
  updatePosterMovie,
  deleteMovie,
  createReview,
  deleteReview,
  showReviews,
};
