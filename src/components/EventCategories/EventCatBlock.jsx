import React from 'react'
import BoldText from '../text/BoldText'

const EventCatBlock = ({children, size='35px'}) => {
  return (
    <div className='bg-[#124AC3] rounded p-2 flex justify-center items-center h-[150px] w-[150px] lg:w-[300px] text-2xl'>
        <BoldText color='text-white' size={size}>{children}</BoldText>
    </div>
  )
}

export default EventCatBlock
