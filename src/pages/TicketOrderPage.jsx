import React from 'react'
import TicketHero from '../components/hero/TicketHero'
import Footer from '../components/footer/Footer'

const TicketOrderPage = () => {
  return (
    <div className='bg-[#f5f5f5] space-y-5'>
      <TicketHero />
      <div className='h-[300px]'></div>
      <Footer />
    </div>
  )
}

export default TicketOrderPage
