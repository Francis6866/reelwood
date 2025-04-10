import React from 'react'
import Hero from '../components/hero/Hero'
import LeadershipCon from '../components/leadershipCon/LeadershipCon'
import TechPort from '../components/techPorth/TechPort'
import UpcomingEvent from '../components/upcomingEvents/UpcomingEvent'
import EventCategories from '../components/EventCategories/EventCategories'
import Footer from '../components/footer/Footer'
const LandingPage = () => {
  return (
    <div className='space-y-10'>
        {/* Hero */}
      <section>
        <Hero />
      </section>

      <section className='flex flex-col w-[95%] mx-auto space-y-10'>
        <LeadershipCon />
        <TechPort />
        <UpcomingEvent />
        <EventCategories />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default LandingPage
