const {Router} = require('express');
const authenticate = require('../middleware/authenticate');
const { findCurrentUser, findUserById, searchUser, editUser, deleteUser } = require('../controllers/usercontroller');


const router=Router();

router.get("/profile",authenticate,findCurrentUser);
router.get("/:userId",authenticate,findUserById);

router.get("/",authenticate,searchUser);
router.put("/:id",authenticate,editUser);
router.delete("/:id",authenticate,deleteUser);

module.exports = router;
