import React from 'react'
import EventCatBlock from './EventCatBlock'
import EventCatOut from './EventCatOut'

const EventCategories = () => {
  return (
    <div className='space-y-10 max-md:px-6'>
    <header>
      <h3 className='text-[36px] font-[500] italic monserat'>Event Categories</h3>
    </header>
      
      <section className='grid grid-cols-2 lg:grid-cols-4 gap-y-10 justify-center'>
        <EventCatBlock>Comedy</EventCatBlock>
        <EventCatOut>TechTalk</EventCatOut>
        <EventCatOut opacity='true'>Fashion</EventCatOut>
        <EventCatOut opacity='true'>Music</EventCatOut>
        <EventCatOut opacity='true'>Party</EventCatOut>
        <EventCatOut opacity='true'>Social</EventCatOut>
        <EventCatOut opacity='true'>Business</EventCatOut>
        <EventCatOut opacity='true'>Live Show</EventCatOut>
      </section>
    </div>
  )
}

export default EventCategories
