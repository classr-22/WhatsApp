const { Router } = require("express");
const {getAllMessage,createMessage}=require("../controllers/messagecontroller");
const authenticate = require("../middleware/authenticate");

const router = Router();

router.get("/:chatId",authenticate,getAllMessage);
router.post("/",authenticate,createMessage); 

module.exports=router;