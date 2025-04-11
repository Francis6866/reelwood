import React from 'react'
import SelectHero from '../components/hero/SelectHero'
import Footer from '../components/footer/Footer'

const SelectTicketPage = () => {
  return (
    <div className='bg-[#f5f5f5] space-y-5'>
      <SelectHero />
      <div className='h-[300px]'></div>
      <Footer />
    </div>
  )
}

export default SelectTicketPage
