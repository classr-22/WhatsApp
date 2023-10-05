import React from 'react'
import StatusUserCard from './StatusUserCard'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Status = () => {
    const navigate = useNavigate();

    const handleNavigate=()=>{
        navigate(-1);
    }

  return (
    <div>
        <div className='flex items-center py-[7vh] px-[14vw]'>
            <div className='left bg-[#1e262c] h-[85vh] w-[50%] lg:w-[30%] px-5'>
                <div className='pt-2 h-[13%]'>
                    <StatusUserCard/>
                </div>
                <hr/>
                <div className='overflow-y-scroll h-[86%] pt-2'>
                    {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10].map((item)=>
                        <StatusUserCard/>
                    )}
                </div>
            </div>
            <div className='right relative h-[85vh] lg:w-[70%] w-[50%] bg-[#0b141a]'>
                <AiOutlineClose onClick={handleNavigate} className='text-white cursor-pointer absolute top-5 right-10 text-xl'/>
            </div>
        </div>
    </div>
  )
}

export default Status