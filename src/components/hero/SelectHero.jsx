import React from 'react'
import heroHands from '../../assets/images/heroHands.jpg'
import MainNav from '../nav/MainNav'
import SecLocPix from './SecLocPix';
import SecOrder from './SecOrder';




const SelectHero = () => {
  return (
    <div className='w-full lg:h-[900px] bg-center bg-cover' style={{backgroundImage: `url(${heroHands})`}}>
        <div className='bg-[#000000cc] w-full h-full'>
            <div className='space-y-25'>
                <MainNav />

                <div className='flex justify-center'>
                    <div className="grid lg:grid-cols-2 max-md:gap-y-10">
                        {/* location and pix */}
                        <section className='max-md:order-1'>
                            <SecLocPix />
                        </section> {/* end */}


                        <section className=' flex justify-center relative bottom-15 rounded-md shadow'>
                            <SecOrder />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectHero
