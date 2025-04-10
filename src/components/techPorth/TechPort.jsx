import React from 'react'
import portTech from '../../assets/images/techPort.jpg'
import TechDes from './TechDes'
import TimeSep from '../time/TimeSep'

const TechPort = () => {
  return (
    <div className='w-full lg:h-[500px] bg-center bg-cover rounded overflow-hidden' style={{backgroundImage: `url(${portTech})`}}>
        <div className='bg-linear-to-r from-[#0b0b0b8c] to-[#1248bd8c] w-full h-full flex p-8'>
            
        <div className='flex max-md:flex-col space-y-8 w-full lg:flex-row justify-between items-center'>
                <div className='lg:w-[50%]'>
                  <TechDes />
                </div>

                <div className='lg:w-[40%]'>
                  <TimeSep />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechPort

{/* <div className="grid gap-5 lg:gap-60 w-[90%] mx-auto justify-center items-center lg:grid-cols-2">
                  <TechDes />
                  <TimeSep />
              </div> */}
