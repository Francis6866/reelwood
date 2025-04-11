import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const OrderDes = ({category='Regular', amount='10000' }) => {
  return (
    <div className='flex justify-between border-b-[0.5px] p-5'>
        {/* des */}
        <div className='space-y-2.5'>
            <h3 className='font-bold text-2xl font-[poppins]'>{category}</h3>
            <p className="amount flex items-center"><TbCurrencyNaira />{amount}</p>
        </div>
                                        
        {/* buttons */}
        <div className='flex justify-center items-center gap-2'>
            <button>
                <CiCircleMinus size={35}/>
            </button>
            <p>0</p>
            <button>
                <CiCirclePlus size={35}/>
            </button>
        </div>
    </div>
  )
}

export default OrderDes
