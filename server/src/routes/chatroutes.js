const {Router} = require("express");
const authenticate  = require("../middleware/authenticate");
const {createChat,getAllChat,renameGroup, addUserToGroup, removeUserFromGroup} = require("../controllers/chatcontroller");

const router = Router();

router.post("/",authenticate,createChat);

router.get("/",authenticate,getAllChat);

router.put("/rename",authenticate,renameGroup);

router.put("/add/user",authenticate,addUserToGroup);

router.put("/remove/user",authenticate,removeUserFromGroup);

module.exports = router;
