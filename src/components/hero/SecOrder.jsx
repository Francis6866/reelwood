import React from 'react'
import BlockBtn from '../button/BlockBtn';
import OrderDes from './OrderDes';

const SecOrder = () => {
  return (
    <div className='lg:w-[600px] w-[90%] lg:h-[1000px] bg-white rounded-md py-5 space-y-10'>
        <header>
            <h3 className='text-[#124AC3] text-3xl italic text-center'>Select Ticket</h3>
        </header>

        <main className='space-y-15'>
              <OrderDes category='Regular' amount='10,000'/>                      
              <OrderDes category='Gold Table' amount='1,500,000'/>                      
              <OrderDes category='VIP' amount='20,000'/>                      
              <OrderDes category='Platinum Table for 10' amount='2,000,000'/>                      
        </main>

        <footer className='flex justify-center py-5'>
            <div className='w-[200px]'>
                <BlockBtn>BUY NOW</BlockBtn>
            </div>
        </footer>
    </div>
  )
}

export default SecOrder
