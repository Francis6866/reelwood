import React from 'react'
import heroHands from '../../assets/images/heroHands.jpg'
import MainNav from '../nav/MainNav'
import CreateEventForm from '../forms/CreateEventForm'

const Hero = ({ img }) => {
  return (
    <div className='w-full h-[500px] bg-center bg-cover' style={{backgroundImage: `url(${heroHands})`}}>
        <div className='bg-[#000000cc] w-full h-full'>
            <div className='space-y-25'>
                <MainNav />


                <div className='flex justify-center'>
                    <CreateEventForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero


 