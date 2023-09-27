import React, { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { TbCircleDashed } from "react-icons/tb";
import {AiOutlineSearch} from "react-icons/ai";
import {BsFilter} from "react-icons/bs"
import ChatCard from "./ChatCard/ChatCard";

const HomePage = () => {

    const [query,setquery] = useState(null);
    const [currentChat,setcurrentchat] = useState(null);

    const handleClickOnChatCard = () =>{
        setcurrentchat(true);
    }

    const handleSearch=()=>{

    }

    return(
        <div className="relative">
            <div className=" w-full py-14 bg-[#00a884]"></div>
            <div className="flex bg-[#f0f2f5] h-[90vh] absolute top-6 left-6 w-full">
                <div className="left bg-[#e8e9ec] w-[30%] h-full ">
                    <div className="w-full">
                        
                        <div className="flex justify-between items-center p-3">
                            <div className="flex items-center space-x-3">
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

                        <div className="bg-white px-3 h-[76.8vh] overflow-y-scroll">
                            {query && [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((ele) =>
                            <div onClick={handleClickOnChatCard}>
                                <hr/>
                                <ChatCard/>
                            </div>
                        )}
                        </div>
                    </div>
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
                
            </div>
        </div>
    )
};

export default HomePage;