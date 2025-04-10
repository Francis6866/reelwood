import React from 'react'

const TimeSep = () => {
    return (
        <div className='max-w-[200px] h-[50px] rounded-[5px] flex justify-center items-center'>
          {/* <p className='font-[500] text-[26px] text-white'>03 : 32 : 10</p> */}
          <p className='font-[700] text-[26px] text-white space-x-1 flex items-center'>
            <span className='bg-[#00000093] lg:p-10 p-6 text-3xl rounded inline-block'>03</span>
            <span className='inline-block'>:</span>
             <span className='bg-[#00000093] lg:p-10 p-6   text-3xl rounded inline-block'>32</span>
             <span className='inline-block'>:</span>
             <span className='bg-[#00000093] lg:p-10 p-6   text-3xl rounded inline-block'>10</span>
          </p>
        </div>
      )
    }
    
export default TimeSep
