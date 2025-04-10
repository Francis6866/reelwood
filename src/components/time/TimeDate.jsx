import React from 'react'
import { CiClock2, CiCalendarDate  } from "react-icons/ci";

const TimeDate = ({ width='300px' }) => {
  return (
    <div className={`bg-[#000000ce] max-w-[${width}] h-[30px] rounded-[5px] flex items-center justify-center`}>
      <div className='flex space-x-4 text-white text-[20px] w-full justify-center'>
        <div className="time flex items-center space-x-2">
            <CiClock2 />
            <span>06:00pm</span>
        </div>
        <div className="date flex items-center space-x-2">
            <CiCalendarDate />
            <span>03 Jun 20</span>
        </div>
      </div>
    </div>
  )
}

export default TimeDate
