const Chat = require('../models/chatmodel');
const Message = require('../models/messagemodel');

const getAllMessage = async(req,res)=>{
    try{

        const chatId = req.params.chatId;

        const isChat = await Chat.findById(chatId);

        if(!isChat){
            return res.status(400).send({error: "chat not exist with id",chatId});
        }

        const messages = await Message.find({chat: req.params.chatId}).populate("sender","-password").populate("chat");
        return res.status(200).send(messages);

    }catch(error){
        return res.status(400).send({error:error.message})
    }
}

const createMessage = async(req,res)=>{

    const {content,chatId} = req.body;

    try {
        
        const reqUser=await req.user;

        if(!content || !chatId){
            return res.status(400).send({error:"content and chatId are required"});
        }

        let newMessage={
            sender: reqUser.user._id,
            content,
            chat: chatId
        }

        const createMessage = await Message.create(newMessage);

        const fullMessage = await Message.findById(createMessage._id)
        .populate("sender","-password")
        .populate("chat");

    } catch (error) {
        return res.status(400).send({error:error.message})
    }
}

module.exports={createMessage,getAllMessage}

