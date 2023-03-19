const { Router } = require("express");
const { auth } = require("../middlewares/auth.middlewares");
const {
  index,
  showMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  createReview,
  updateReview,
  deleteReview,
  updatePosterMovie,
  showReviews,
} = require("../controllers/movie.controllers");

const { createValidator, updateValidator, uploadImage } = require("../middlewares/movies.middlewares");

const router = Router();

router.get("/", index);
router.get("/:movieId", showMovie);
router.post("/", auth, uploadImage, createValidator, createMovie);
router.put("/:movieId", auth, updateValidator, updateMovie);
router.put("/poster/:movieId", auth, uploadImage, updatePosterMovie);
router.delete("/:movieId", auth, deleteMovie);
router.post("/review/:movieId", auth, createReview);
router.get("/review/:movieId", showReviews);
router.delete("/review/:reviewId", auth, deleteReview);

module.exports = router;
