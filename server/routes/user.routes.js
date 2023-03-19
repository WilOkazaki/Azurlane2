const { Router } = require("express");
const {
  index,
  showUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");
const { auth } = require("../middlewares/auth.middlewares");
const { createValidator, updateValidator } = require("../middlewares/users.middlewares");

const router = Router();

router.get("/", [auth], index);
router.get("/:id", [auth], showUser);
router.post("/", [auth, createValidator], createUser);
router.put("/:id", [auth, updateValidator], updateUser);
router.delete("/:id", [auth], deleteUser);

module.exports = router;
