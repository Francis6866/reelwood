import React from 'react'
import BoldText from '../text/BoldText'

const BlockBtn = ({children, size='16px', type=''}) => {
  return (
    <div className='bg-[#124AC3] rounded p-2 flex justify-center items-center cursor-pointer'>
      <button type={type}>
        <BoldText color='text-white' size={size}>{children}</BoldText>
      </button>
    </div>
  )
}

export default BlockBtn
