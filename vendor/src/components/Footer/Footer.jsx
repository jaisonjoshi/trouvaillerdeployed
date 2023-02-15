import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube , faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Assets/logo.png'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div  id="footer">
      <footer className='bg-blacky-light p-4 '>
        
       <div className=" flex w-[90%] gap-[1%] flex-wrap xl:w-[60%] mx-auto justify-between py-8 sm:py-12">
          <div className="w-[49%] md:w-[30%]">
              <h2 className='text-[white] text-base sm:text-lg pb-4 sm:pb-8'>Sitemap</h2>
              <ul className='flex flex-col gap-[10px]'>
                <li className='text-[#e2e2e2] text-xs sm:text-sm  hover:text-[white]'><Link to="/"> Home</Link></li>
                <li className='text-[#e2e2e2] text-xs sm:text-sm  hover:text-[white]'><Link href="https://trouvailler.com"> trouvailler.com</Link></li>
                <li className='text-[#e2e2e2] text-xs sm:text-sm  hover:text-[white]'><Link to="/termandconditions"> Terms & conditions</Link></li>

              </ul>

          </div>
            <div className="w-[49%] md:w-[30%]">

          <h2 className='text-[white] text-base sm:text-lg pb-4 sm:pb-8'>Services</h2>
              <ul className=' flex flex-col gap-[10px] text-xs sm:text-sm'>
                <li className='text-[#e2e2e2]  hover:text-[white]'><Link to="/vendor"> Go to hotels</Link></li>
                <li className='text-[#e2e2e2]  hover:text-[white]'><Link to="/">Bids </Link></li>

              </ul>

          </div>
          <div className="w-[100%] md:w-[30%]">
            <h2 className='text-[white] pt-8 md:pt-0 text-base sm:text-lg pb-4 md:pb-8'>Connect us</h2>

              <p className='text-[#e2e2e2] text-xs sm:text-sm '>Get in touch with us anytime through our official WhatsApp handle </p>
              <a href="https://wa.me/918129177335"><button className='bg-evergreen text-sm text-blacky-dark  font-bold rounded px-8 py-3 mt-4 flex items-center'><span>WhatsApp</span> <FontAwesomeIcon icon={faWhatsapp} className="ml-3 text-lg" /></button></a>

          </div>



       </div>

        <div className='border-t-2 border-graydust-medium flex justify-between items-end align-middle px-0 py-3 sm:py-6 md:pl-6  ml-4 sm:mx-10'>
         <a href="" className='w-[25%] sm:w-[10%]'>
            <img src={Logo} alt="Trouvailler" className='sm:w-100 xl:w-3/4'/>
</a>          
         
         <div className='flex justify-evenly items-center'>
           <Link className='mx-4 text-[#e2e2e2] hidden sm:block text-xs text-underline' to="/termandconditions">Terms and Conditions</Link>
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
        <div className='ml-4 text-[gray] sm:hidden'>
            <span className='text-xs'>Trouvailler &copy;2023</span><Link className='mx-4 underline  text-xs ' to="/termandconditions">Terms and Conditions</Link>

          </div>
      </footer>
    </div >
  )
}

export default Footer