import React, { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { TbCircleDashed } from "react-icons/tb";
import {AiOutlineSearch} from "react-icons/ai";
import {BsEmojiAngry, BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical} from "react-icons/bs"
import { ImAttachment } from "react-icons/im"
import ChatCard from "./ChatCard/ChatCard";
import MessageCard from "./MessageCard/MessageCard";
import './HomePage.css'
import Profile from "./Profile/Profile";

const HomePage = () => {

    const [query,setquery] = useState(null);
    const [currentChat,setcurrentchat] = useState(null);
    const [content,setcontent] = useState("");
    const [isprofile,setisprofile] = useState(false);

    const handleClickOnChatCard = () =>{
        setcurrentchat(true);
    }

    const handleSearch=()=>{

    }

    const handleCreateNewMessage = () => {

    }

    const handleNavigate = () => {
        setisprofile(true);
    }

    const handleCloseOpenProfile = () =>{
        setisprofile(false);
    }

    return(
        <div className="relative">
            <div className=" w-full py-14 bg-[#00a884] rounded-md"></div>
            <div className="flex bg-[#f0f2f5] h-[90vh] absolute top-[5vh] left-[1vw] w-[97vw]">
                <div className="left bg-[#e8e9ec] w-[30%] h-full ">
                    {isprofile && <div className="w-full h-full"><Profile handleCloseOpenProfile={handleCloseOpenProfile}/></div>}
                    
                    {!isprofile && <div className="w-full">
                        <div className="flex justify-between items-center p-3">
                            <div onClick={handleNavigate} className="flex items-center space-x-3">
                                <img className="rounded-full w-10 h-10 cursor-pointer" 
                                src="https://cdn.pixabay.com/photo/2023/06/20/01/30/ai-generated-8075768_640.jpg" 
                                alt="" />
                                <p>username</p>
                            </div>
                            <div className="flex text-2xl space-x-3">
                                <TbCircleDashed/>
                                <BiCommentDetail/>
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center bg-white py-4 px-3">
                            <input
                                className="border-none outline-none bg-slate-200 w-[93%] pl-9 py-2 rounded-md"
                                type="text"
                                placeholder="Search or start a new chat"
                                onChange={(e)=>{
                                    setquery(e.target.value);
                                    handleSearch(e.target.value);
                                }}
                                value={query}
                            />
                            <AiOutlineSearch className="left-5 top-7 absolute"/>
                            <div>
                                <BsFilter className="ml-4 text-3xl"/>
                            </div>
                        </div>

                        <div className="bg-white px-3 h-[70.85vh] overflow-y-scroll">
                            {query && [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((ele) =>
                            <div onClick={handleClickOnChatCard}>
                                <hr/>
                                <ChatCard/>
                            </div>
                        )}
                        </div>
                    </div>}
                </div>
                
                
                    {!currentChat && <div className="w-[70%] flex flex-col items-center justify-center h-full">
                        <div className="max-w-[70%] text-center">
                            <img 
                            className="w-full"
                            src="https://images.news18.com/ibnlive/uploads/2023/04/untitled-design-2023-04-04t124923.888.jpg?impolicy=website&width=510&height=356" 
                            alt="" 
                            />
                            <h1 className="mt-5 text-4xl text-gray-600">ChatIO Web</h1>
                            <p className="my-9">
                                Now send and receive messages without keeping your phone online Use 
                                ChatIO on up to 4 linked devices and 1 phone at the same time
                            </p>
                        </div>
                    </div>}


                
                {currentChat &&
                <div className="relative w-[70%]">
                    <div className="header absolute top-0 w-full bg-white">
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-4 px-3 py-3">
                                <img
                                className="rounded-full w-10 h-10"
                                src="https://cdn.pixabay.com/photo/2023/09/15/04/05/sea-8254024_640.jpg"
                                alt=""
                                ></img>
                                <p>
                                    username
                                </p>
                            </div>
                            <div className="flex items-center space-x-4 px-3 py-3">
                                <AiOutlineSearch/>
                                <BsThreeDotsVertical/>
                            </div>
                        </div>
                    </div>

                    <div className="px-10 h-[85vh] overflow-y-scroll bg-blue-200">
                        <div className="space-y-1 flex flex-col justify-center mt-20 py-2">
                            {[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,i)=><MessageCard isRequserMessage={i%2==0} content={"message"}/>)}
                        </div>
                    </div>

                    <div className=" footer bg-[#e8e9ec] absolute bottom-0 w-full py-2 text-2xl">
                        <div className="flex justify-between items-center px-5 relative">
                            <BsEmojiSmile className="cursor-pointer"/>
                            <ImAttachment/>
                        
                            <input 
                            className="w-[85%] py-2 outline-none border-none bg-white pl-4 rounded-md" 
                            type="text" 
                            placeholder="Type a message"
                            onChange={(e)=> setcontent(e.target.value)}
                            value={content}
                            onKeyPress={(e)=>{
                                if(e.key=="Enter"){
                                    handleCreateNewMessage();
                                    setcontent();
                                }
                            }} 
                            />
                            <BsMicFill/>   
                        </div>
                    </div>

                </div>}
                
            </div>
        </div>
    )
};

export default HomePage;