import React from 'react'
import leaders from '../../assets/images/leadership-conference.jpg'
import TimeSingle from '../time/TimeSingle'

const LeaderImg = () => {
  return (
    <div className='lg:w-[30%] overflow-hidden relative'>
        <img src={leaders} alt="Conference logo" className='w-full object-fit-cover'/>
        <div className='relative z-1 lg:bottom-35 lg:left-15 max-md:bottom-40 max-md:left-15'>
            <TimeSingle />
        </div>
    </div>
  )
}

export default LeaderImg
