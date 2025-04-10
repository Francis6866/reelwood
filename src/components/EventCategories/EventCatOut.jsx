import React from 'react'
import BoldText from '../text/BoldText'

const EventCatOut = ({children, opacity='false'}) => {

  return (
    <div className={`border-2 border-[#124AC3] rounded p-2 flex justify-center items-center h-[150px] w-[150px] lg:w-[300px] text-2xl ${ opacity === 'true' && 'opacity-75'}`}>
        <BoldText color='text-[#124AC3]' size='35px'>{children}</BoldText>
    </div>
  )
}

export default EventCatOut
