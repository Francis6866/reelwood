import React from 'react'
import OderDesTicket from './OderDesTicket'
import BlockBtn from '../button/BlockBtn'
import { TbCurrencyNaira } from "react-icons/tb";


const TicketOrder = () => {
  return (
    <div className='lg:w-[600px] w-[90%] lg:h-[1000px] bg-white rounded-md py-5 space-y-10'>
        <header>
            <h3 className='text-[#124AC3] text-3xl italic text-center'>Ticket Order</h3>
        </header>

        <main className='space-y-15'>
              <OderDesTicket category='1 x Regular' amount='10,000'/>                      
              <OderDesTicket category='1 x Regular' amount='10,000'/>                      
              <OderDesTicket category='1 x Regular' amount='10,000'/>                      
              <div className='flex justify-between p-5'>
                <div className='text-blue-700 font-bold text-2xl font-[poppins]'><h3>Final Total</h3></div>

                <div className='flex justify-center items-center gap-2'>
                    <TbCurrencyNaira />
                    <p>10,000</p>
                </div>                    
              </div>

        </main>

        <footer className='flex justify-center py-5'>
            <div className='w-[200px]'>
                <BlockBtn>Make Payment</BlockBtn>
            </div>
        </footer>
    </div>
  )
}

export default TicketOrder
