import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import Heading3Text from '../text/Heading3Text'
import SmallText from '../text/SmallText'


const EventCardWrite = () => {
  return (
    <div className='space-y-1'>
        <header className='flex gap-5 items-center'>
            <span className='block w-[40px] h-[7px] bg-black'></span>
            <Heading3Text>Singles Hangout</Heading3Text>
        </header>

        <div className='flex gap-5 items-center px-1'>
            <div className=''>
                <FaLocationDot size={35} />
            </div>
            <SmallText>Opposite Portharcout Pleasure Park behind bori camp, portharcout, rivers state</SmallText>
        </div>
    </div>
  )
}

export default EventCardWrite
