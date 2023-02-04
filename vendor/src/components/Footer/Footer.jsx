import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Assets/logo.png'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className='bg-blacky-light p-4'>
        
       <div className=" flex w-[90%] gap-[1%] flex-wrap xl:w-[60%] mx-auto justify-between py-12">
          <div className="w-[49%] md:w-[30%]">
              <h2 className='text-[white] text-lg pb-8'>Sitemap</h2>
              <ul className='flex flex-col gap-[10px]'>
                <li className='text-[#e2e2e2] text-sm md:text-base hover:text-[white]'><Link to="/"> Home</Link></li>
                <li className='text-[#e2e2e2] text-sm md:text-base hover:text-[white]'><Link to="/bid-status"> My Bids</Link></li>
                <li className='text-[#e2e2e2] text-sm md:text-base hover:text-[white]'><Link> Terms & conditions</Link></li>

              </ul>

          </div>
            <div className="w-[49%] md:w-[30%]">

          <h2 className='text-[white] text-lg pb-8'>Services</h2>
              <ul className=' flex flex-col gap-[10px]'>
                <li className='text-[#e2e2e2] text-sm md:text-base hover:text-[white]'><Link to="/what-is-bid"> Bid for a stay</Link></li>
                <li className='text-[#e2e2e2] text-sm md:text-base hover:text-[white]'><Link to="/hotels"> Hotels</Link></li>
                <li className='text-[#e2e2e2] text-sm md:text-base hover:text-[white]'><Link to="/packages"> Travel Packages</Link></li>

              </ul>

          </div>
          <div className="w-[100%] md:w-[30%]">
            <h2 className='text-[white] pt-16 md:pt-0 text-lg pb-4 md:pb-8'>Connect us</h2>

              <p className='text-[#e2e2e2] text-sm md:text-base'>Get in touch with us anytime through our official WhatsApp handle </p>
              <a href="https://wa.me/918129177335"><button className='bg-evergreen text-whiteglow rounded px-8 py-3 mt-4'>WhatsApp <FontAwesomeIcon icon={faWhatsapp} className="ml-3 text-2xl" /></button></a>

          </div>



       </div>

        <div className='border-t-2 border-graydust-medium flex justify-between align-middle px-0 py-6 md:p-6  mx-4 sm:mx-10'>
          <a href="" className='w-4/12 sm:w-1/12'>
            <img src={Logo} alt="Trouvailler" className='sm:w-100 xl:w-3/4'/>
          </a>
          <div className='flex justify-evenly'>
            <a href="https://www.facebook.com/travelwithtrouvailler/">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faFacebookF} /></div>
            </a>
            <a href="https://www.youtube.com/@travelwithtrouvailler6162">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faYoutube} /></div>
            </a>
            <a href="https://www.instagram.com/trouvailler_guides/">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faInstagram} /></div>
            </a>
           
          </div>
        </div>
      </footer>
    </div >
  )
}

export default Footer