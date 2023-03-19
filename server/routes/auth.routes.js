const { Router } = require("express");
const { signupValidators } = require("../middlewares/auth.middlewares");
const { singUp, singIn } = require("../controllers/auth.controllers");

const router = Router();

router.post("/singUp", [signupValidators], singUp);
router.post("/singIn", singIn);

module.exports = router;
