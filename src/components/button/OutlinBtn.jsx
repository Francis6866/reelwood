import React from 'react'
import SmallText from '../text/SmallText'

const OutlinBtn = ({children}) => {
    return (
        <div className='border-2 border-[#124AC3] rounded p-2 flex justify-center items-center'>
          <button>
            <SmallText color='text-[#124AC3]' size='20px'>{children}</SmallText>
          </button>
        </div>
      )
}

export default OutlinBtn
