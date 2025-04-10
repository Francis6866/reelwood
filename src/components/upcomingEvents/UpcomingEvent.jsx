import React from 'react'
import EventCard from '../eventCards/EventCard'
import card1 from '../../assets/images/eventCard-1.jpg'
import OutlinBtn from '../button/OutlinBtn'

const UpcomingEvent = () => {
  return (
    <div className='space-y-10'>
      <header>
        <h3 className='text-[36px] font-[500] italic monserat'>Upcoming Events</h3>
      </header>

      <section className='grid lg:grid-cols-3 gap-y-10 justify-center'>
        <EventCard src={card1}/>
        <EventCard src={card1}/>
        <EventCard src={card1}/>
        <EventCard src={card1}/>
        <EventCard src={card1}/>
        <EventCard src={card1}/>
      </section>

      <div className="flex justify-center">
          <div className='w-[200px]'>
            <OutlinBtn>See more events</OutlinBtn>
          </div>
      </div>

    </div>
  )
}

export default UpcomingEvent
