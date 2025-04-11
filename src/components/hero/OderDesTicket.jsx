import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";


const OderDesTicket = ({ category, amount, color='text-black', border='0.5px' }) => {
  return (
    <div className='flex justify-between border-b-[0.5px] p-5'>
    {/* des */}
    <div className='space-y-2.5'>
        <h3 className='font-bold text-2xl font-[poppins]'>{category}</h3>
    </div>
                                    
    {/* buttons */}
    <div className='flex justify-center items-center gap-2'>
        <TbCurrencyNaira />
        <p>{amount}</p>
    </div>
</div>
  )
}

export default OderDesTicket
