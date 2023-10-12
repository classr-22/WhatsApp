const {Router} = require("express");
const {registerUser, loginUser} = require("../controllers/authcontroller");

const router = Router();

router.post("/signup",registerUser);
router.post("/signin",loginUser);

module.exports=router;