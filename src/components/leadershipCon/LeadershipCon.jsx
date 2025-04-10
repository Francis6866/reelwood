import React from 'react'
import LeaderImg from './LeaderImg';
import LeaderDes from './LeaderDes';

const LeadershipCon = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:gap-10'>
        {/* image */}
      <LeaderImg />

        {/* conference description */}
      <div className='lg:w-[60%]'>
        <LeaderDes />
      </div>

    </div>
  )
}

export default LeadershipCon
