import React from 'react'
import TimeDate from '../time/TimeDate'
import BlockBtn from '../button/BlockBtn'
import { FaLocationDot } from "react-icons/fa6";

const TechDes = () => {
  return (
    <div className='lg:space-y-9 space-y-2.5'>
        <header>
            <h2 className='text-5xl text-center lg:text-left font-[700] font-[poppins] text-white'>TechUp Portharcourt</h2>
            <TimeDate />
        </header>
        <div className="address flex items-start gap-2">
            <FaLocationDot color='white' size={40} />
            <p className='text-2xl font-[poppins] font-[400] tracking-wider text-white'>Opposite Portharcourt Pleasure Park behind bori camp, portharcourt, Rivers state</p>
        </div>

        <div className="button lg:w-[60%]">
            <BlockBtn>Book A Spot</BlockBtn>
        </div>
      </div>
  )
}

export default TechDes
