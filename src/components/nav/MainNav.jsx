import React from 'react'
import BrandLogo from '../../assets/images/brandLogo.png'
import BoldText from '../text/BoldText'

const MainNav = () => {
  return (
    <header className='px-4 text-white flex justify-between items-center'>
      {/* brand logo */}
      <div className='w-[173px] h-[66px] relative bottom-5'>
        <a href="#"><img src={BrandLogo} alt="" className='w-full object-fit-cover'/></a>
      </div>

      {/* nav */}
      <nav>
        <ul className='space-x-6.5'>
            <li className='inline-block'><a href=""><BoldText color='text-white' size='22px'>Home</BoldText></a></li>
            <li className='inline-block'><a href=""><BoldText color='text-white' size='22px'>Upcoming</BoldText></a></li>
            <li className='inline-block'><a href=""><BoldText color='text-white' size='22px'>Contact Us</BoldText></a></li>
        </ul>
      </nav>

      {/* help */}
      <ul className='space-x-6.5'>
        <li className='inline-block'><a href=""><BoldText color='text-white' size='22px'>Help</BoldText></a></li>
        <li className='inline-block'><a href=""><BoldText color='text-white' size='22px'>Login</BoldText></a></li>
      </ul>
    </header>
  )
}

export default MainNav
