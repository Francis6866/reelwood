import React from 'react'
import BrandLogo from '../../assets/images/brandLogo.png'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterForm from '../forms/FooterForm';



const Footer = () => {
  return (
    <footer className='bg-linear-to-r from-[#000000] to-[#051C50] px-6 py-10 space-y-5'>
      {/* brand logo */}
      <div className='w-[173px] h-[66px] relative bottom-5'>
        <a href="#"><img src={BrandLogo} alt="" className='w-full object-fit-cover'/></a>
      </div>

      {/* footer content */}
      <section className='grid lg:grid-cols-5 gap-5 lg:gap-10'>
        <div>
            <p className='text-white tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labe dolore magna aliqua enim ad minim veniam exercitation.</p>
        </div>
        <div className='text-white'>
            <h2 className='font-bold'>Business</h2>
            <ul>
                <li>Sponsorship</li>
                <li>Parnership</li>
                <li>Affilate Partners</li>
                <li>Advert Placements</li>
            </ul>
        </div>

        <div className='text-white'>
            <h2 className='font-bold'>Events</h2>
            <ul>
                <li>Free events</li>
                <li>Upcoming events</li>
                <li>This week's events</li>
                <li>Events by cities</li>
            </ul>
        </div>

        <div className='text-white lg:col-span-2'>
            <h2 className='font-bold'>Don't miss updates</h2>
            <FooterForm />
        </div>
        
      </section>

        {/* contact */}
        <div>
            <div className='flex gap-5 space-y-5'>
                <FaFacebook color='white' size={32}/>
                <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0.639893C7.51675 0.639893 0.639954 7.51669 0.639954 15.9999C0.639954 24.4831 7.51675 31.3599 16 31.3599C24.4832 31.3599 31.36 24.4831 31.36 15.9999C31.36 7.51669 24.4832 0.639893 16 0.639893ZM22.248 13.2223C22.2544 13.3535 22.256 13.4847 22.256 13.6127C22.256 17.6127 19.2144 22.2223 13.6496 22.2223C12.0052 22.225 10.3951 21.7528 9.01275 20.8623C9.24795 20.8911 9.48955 20.9023 9.73435 20.9023C11.152 20.9023 12.456 20.4207 13.4912 19.6079C12.8603 19.5955 12.249 19.3866 11.7425 19.0103C11.236 18.634 10.8596 18.1091 10.6656 17.5087C11.1186 17.5948 11.5853 17.5768 12.0304 17.4559C11.3456 17.3174 10.7299 16.9464 10.2875 16.4058C9.8451 15.8651 9.60332 15.1881 9.60315 14.4895V14.4527C10.0112 14.6783 10.4784 14.8159 10.9744 14.8319C10.3324 14.4046 9.87801 13.7482 9.70403 12.9969C9.53004 12.2456 9.64964 11.4563 10.0384 10.7903C10.7983 11.7247 11.746 12.4891 12.8201 13.034C13.8942 13.5789 15.0707 13.8922 16.2736 13.9535C16.1206 13.3044 16.1864 12.6229 16.4608 12.0151C16.7351 11.4073 17.2025 10.9071 17.7905 10.5923C18.3784 10.2776 19.0538 10.1658 19.7118 10.2746C20.3697 10.3833 20.9733 10.7063 21.4288 11.1935C22.1058 11.0595 22.7551 10.8112 23.3488 10.4591C23.1231 11.1601 22.6506 11.7554 22.0192 12.1343C22.6189 12.0621 23.2045 11.9008 23.7568 11.6559C23.3511 12.2637 22.8402 12.7942 22.248 13.2223Z" fill="white"/>
                </svg>
                </div>
                <div className='flex justify-center items-center w-[32px] h-[32px] rounded-full bg-white'>
                    <FaYoutube/>
                </div>
            </div>

            {/* copywright */}
            <div>
                <p className='text-[0.75rem] text-white'>&copy; 2021 Reelword. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
