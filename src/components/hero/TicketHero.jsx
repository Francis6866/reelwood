import React from 'react'
import heroHands from '../../assets/images/heroHands.jpg'
import MainNav from '../nav/MainNav'
import TicketForm from '../forms/TicketForm'
import TicketOrder from './TicketOrder'

const TicketHero = () => {
  return (
    <div className='w-full lg:h-[900px] bg-center bg-cover' style={{backgroundImage: `url(${heroHands})`}}>
        <div className='bg-[#000000cc] w-full h-full'>
            <div className='space-y-25 py-4'>
                <MainNav />

                <div className='flex justify-center'>
                    <div className="grid lg:grid-cols-2 lg:gap-20 max-md:gap-y-10">
                        {/* location and pix */}
                        <section className='max-md:order-1 flex justify-center'>
                            <TicketForm />
                        </section> {/* end */}


                        <section className=' flex justify-center relative bottom-15 rounded-md shadow'>
                            <TicketOrder />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TicketHero
