import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube , faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Assets/Trouvailler Green.png'
import {Link} from 'react-router-dom'
const Footer = ({bg}) => {
  return (
    <div  id="footer">
      <footer className={`gradientbg ${bg}  font-body`}>
        
     {/*   <div className=" flex  gap-[1%] flex-wrap mx-auto justify-between py-8 sm:py-16 px-4 sm:px-16 md:px-20 2xl:px-60">
          <div className="w-[49%] md:w-[30%]">
              <h2 className='text-[white] text-lg sm:text-lg pb-4 sm:pb-8'>Sitemap</h2>
              <ul className='flex flex-col gap-[10px]'>
                <li className='text-[#e2e2e2] text-xs sm:text-base  hover:text-[white]'><Link to="/"> Home</Link></li>
                <li className='text-[#e2e2e2] text-xs sm:text-base  hover:text-[white]'><Link to="/bid-status"> My Bids</Link></li>
                <li className='text-[#e2e2e2] text-xs sm:text-base  hover:text-[white]'><Link to="/termandconditions"> Terms & conditions</Link></li>

              </ul>

          </div>
            <div className="w-[49%] md:w-[30%]">

          <h2 className='text-[white] text-lg pb-4 sm:pb-8'>Services</h2>
              <ul className=' flex flex-col gap-[10px] text-xs sm:text-base'>
                <li className='text-[#e2e2e2]  hover:text-[white]'><Link to="/what-is-bid"> Bid for a stay</Link></li>
                <li className='text-[#e2e2e2]  hover:text-[white]'><Link to="/hotels"> Hotels</Link></li>
                <li className='text-[#e2e2e2]  hover:text-[white]'><Link to="/packages"> Travel Packages</Link></li>

              </ul>

          </div>
          <div className="w-[100%] md:w-[30%]">
            <h2 className='text-[white] pt-8 md:pt-0 text-lg pb-4 md:pb-8'>Connect us</h2>

              <p className='text-[#e2e2e2] text-xs sm:text-base title-font leading-normal'>Get in touch with us anytime through our official WhatsApp handle </p>
              <a href="https://wa.me/918129177335"><button className='bg-evergreen text-sm text-[white]  font-bold rounded px-8 py-3 mt-4 flex items-center'><span>WhatsApp</span> <FontAwesomeIcon icon={faWhatsapp} color='white' className="ml-3 text-lg" /></button></a>

          </div>



       </div>

        <div className='border-t-2 border-graydust-medium flex justify-between items-end align-middle px-0 py-6 md:pl-6  ml-4 sm:mx-10'>
         <a href="" className='w-[25%] sm:w-[10%]'>
            <img src={Logo} alt="Trouvailler" className='sm:w-100 xl:w-[100px]'/>
</a>          
         
         <div className='flex justify-evenly items-center'>
           <Link className='mx-4 text-[#e2e2e2] hidden sm:block text-xs text-underline' to="/termandconditions">Terms and Conditions</Link>
           <Link className='mx-4 text-[#e2e2e2] hidden sm:block text-xs text-underline' to="/privacypolicy">Privacy Policy</Link>

            <a href="https://www.facebook.com/travelwithtrouvailler/">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faFacebookF} color='white'/></div>
            </a>
            <a href="https://www.youtube.com/@travelwithtrouvailler6162">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faYoutube} color='white'/></div>
            </a>
            <a href="https://www.instagram.com/trouvailler_guides/">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faInstagram} color='white'/></div>
            </a>
           
          </div>
          
        </div>
        <div className='ml-4 text-[gray] sm:hidden'>
            <span className='text-xs'>Trouvailler &copy;2023</span><br className='md:hidden'/><Link className='md:mx-1 underline  text-xs ' to="/termandconditions">Terms and Conditions</Link><Link className='mx-1 underline  text-xs ' to="/privacypolicy">Privacy Policy</Link>

          </div> */}



        <div className='flex items-start justify-between px-60 py-28  '>
        <div className='w-[30%] flex items-start'>
{/*           <img src={Logo} alt="Trouvailler" className='sm:w-100 xl:w-[140px]'/>
 */}          <h1 className='font-extrabold text-[white] text-2xl poppins '>Discover Your <br /><span className='text-[#00c676]'>Next Adventure with Us</span> </h1>

          </div>
          <div className="w-[49%] md:w-[23%] pl-[3%]">

<h2 className='text-[white] text-lg pb-4 sm:pb-6'>Services</h2>
    <ul className=' flex flex-col gap-[10px] text-xs sm:text-base'>
      <li className='text-[#e2e2e2]  hover:text-[white]'><Link to="/what-is-bid"> Bid for a stay</Link></li>
      <li className='text-[#e2e2e2]  hover:text-[white]'><Link to="/hotels"> Hotels and HomeStays</Link></li>
      <li className='text-[#e2e2e2]  hover:text-[white]'><Link to="/packages"> Travel Packages</Link></li>

    </ul>

</div>
<div className="w-[49%] md:w-[23%] pl-[3%]">
              <h2 className='text-[white] text-lg sm:text-lg pb-4 sm:pb-6'>Sitemap</h2>
              <ul className='flex flex-col gap-[10px]'>
                <li className='text-[#e2e2e2] text-xs sm:text-base  hover:text-[white]'><Link to="/"> Home</Link></li>
                <li className='text-[#e2e2e2] text-xs sm:text-base  hover:text-[white]'><Link to="/bid-status"> My Bids</Link></li>
                <li className='text-[#e2e2e2] text-xs sm:text-base  hover:text-[white]'><Link to="/termandconditions"> Terms & conditions</Link></li>

              </ul>

          </div>
          <div className="w-[49%] md:w-[23%]">
              <h2 className='text-[white] text-lg sm:text-lg pb-4 sm:pb-6'>Address</h2>
              <ul className='flex flex-col gap-[10px]'>
                <li className='text-[#e2e2e2] text-xs sm:text-base  hover:text-[white]'> TC 45/960 NEW BUILDING</li>
                <li className='text-[#e2e2e2] text-xs sm:text-base  hover:text-[white]'>Vallakkadavu p.o, Beemapally</li>
                <li className='text-[#e2e2e2] text-xs sm:text-base  hover:text-[white]'>Thiruvananthapuram, Kerala, India</li>
                <li className='text-[#e2e2e2] text-xs sm:text-base  hover:text-[white]'>695008</li>

              </ul>

          </div>
          <div className="w-[49%] md:w-[23%] pl-[3%]">
              <h2 className='text-[white] text-lg sm:text-lg pb-4 sm:pb-6'>Contact</h2>
              <p className='text-[#e2e2e2] text-xs sm:text-base title-font leading-normal'>Get in touch with us anytime through our official WhatsApp handle </p>
              <a href="https://wa.me/918129177335"><button className='bg-evergreen text-sm text-[white]  font-bold rounded px-8 py-3 mt-4 flex items-center'><span>WhatsApp</span> <FontAwesomeIcon icon={faWhatsapp} color='white' className="ml-3 text-lg" /></button></a>

          </div>
        </div>
        <div className='border-t-2 border-graydust-medium flex justify-between items-end align-middle px-0 py-6 md:pl-6  ml-4 sm:mx-10'>
         <a href="" className='w-[25%] sm:w-[10%]'>
            <img src={Logo} alt="Trouvailler" className='sm:w-100 xl:w-[100px]'/>
</a>          
         
         <div className='flex justify-evenly items-center'>
           <Link className='mx-4 text-[#e2e2e2] hidden sm:block text-xs text-underline' to="/termandconditions">Terms and Conditions</Link>
           <Link className='mx-4 text-[#e2e2e2] hidden sm:block text-xs text-underline' to="/privacypolicy">Privacy Policy</Link>

            <a href="https://www.facebook.com/travelwithtrouvailler/">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faFacebookF} color='white'/></div>
            </a>
            <a href="https://www.youtube.com/@travelwithtrouvailler6162">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faYoutube} color='white'/></div>
            </a>
            <a href="https://www.instagram.com/trouvailler_guides/">
              <div className='bg-evergreen mx-1 w-6 h-6 rounded-full text-center'><FontAwesomeIcon icon={faInstagram} color='white'/></div>
            </a>
           
          </div>
          
        </div>
        <div className='ml-4 text-[gray] sm:hidden'>
            <span className='text-xs'>Trouvailler &copy;2023</span><br className='md:hidden'/><Link className='md:mx-1 underline  text-xs ' to="/termandconditions">Terms and Conditions</Link><Link className='mx-1 underline  text-xs ' to="/privacypolicy">Privacy Policy</Link>

          </div>
      </footer>
    </div >
  )
}

export default Footer