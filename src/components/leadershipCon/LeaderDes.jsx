import React from 'react'
import TimeDate from '../time/TimeDate'
import { FaLocationDot } from "react-icons/fa6";
import BlockBtn from '../button/BlockBtn';

const LeaderDes = () => {
  return (
    <div className='lg:space-y-0.5 space-y-2.5'>
        <header className=''>
            <h2 className='text-2xl text-center lg:text-left font-[700] font-[poppins]'>Excellence in Leadership Conference PH 2021</h2>
            <div className='max-md:pl-8'>
              <TimeDate />
            </div>
        </header>
        <div className="address flex items-start gap-2">
            <FaLocationDot color='blue' size={30} />
            <p className='text-2xl font-[poppins] font-[400] tracking-wider'>Opposite Portharcourt Pleasure Park behind bori camp, portharcourt, Rivers state</p>
        </div>

        <div>
        <p className='text-2xl font-[poppins] font-[500]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation, Read more.</p>
        </div>

        <div className="button lg:w-[40%]">
            <BlockBtn>Book A Spot</BlockBtn>
        </div>
      </div>
  )
}

export default LeaderDes
