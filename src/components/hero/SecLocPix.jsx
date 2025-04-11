import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import TimeDate from '../time/TimeDate';
import grandNight from '../../assets/images/grandNight.jpg'

const SecLocPix = () => {
  return (
    <div>
        <div className='flex gap-5 items-center px-1 tracking-wide'>
            <div className=''>
                <FaLocationDot size={35} color='blue'/>
            </div>
            <p className='tracking-wide text-white'>Oasis Banqueting Hall <br /> 6-8 Thames Road, portharcourt, Rivers state</p>
        </div>

        <div className="w-[400px]">
            <TimeDate/>
        </div>

        <div className="image w-[400px]">
            <img src={grandNight} alt="" className='w-full object-fit-cover'/>
        </div>
    </div>
  )
}

export default SecLocPix
