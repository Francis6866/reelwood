import React from 'react'
import BlockBtn from '../button/BlockBtn';
import EventCardWrite from './EventCardWrite';
import TimeDate from '../time/TimeDate';

const EventCard = ({src}) => {
  return (
    <div className='w-[350px] lg:w-[400px] overflow-hidden rounded relative shadow-md space-y-2 pb-2'>
        {/* event card image */}
      <div className="img relative">
        <img src={src} alt="" className='w-full object-fit-cover'/>

        <div className='px-2 relative bottom-6'>
            <TimeDate width='full' />
        </div>
      </div>

      {/* event card writeUp */}
      <EventCardWrite />

      {/* button */}
      <div className='px-1.5'>
        <BlockBtn>Grab a Ticket</BlockBtn>
      </div>
    </div>
  )
}

export default EventCard
