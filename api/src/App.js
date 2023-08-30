import React, { useEffect } from 'react';
import { BiImages, BiCustomize, BiPhoneCall } from "react-icons/bi";
import { RiCustomerServiceFill, RiWhatsappFill, RiCloseFill, RiInstagramFill, RiFacebookBoxFill, RiYoutubeFill, RiShareFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { AiFillTags, AiFillClockCircle } from "react-icons/ai";
import { PiFlagPennantFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  const [loading, setLoading] = React.useState(false)

  const [initialData, setInitialData] = React.useState(window && window.initialData || null)
  useEffect(() => {
    if (initialData) {
      setLoading(true);
    }

   
  }, []);
  console.log(initialData)
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const stickySecond = document.getElementById('sticky-second');
    const navbarRect = navbar.getBoundingClientRect();
    const stickySecondRect = stickySecond.getBoundingClientRect();
    stickySecond.style.top = (stickySecondRect.top - navbarRect.height + 'px');
    console.log(stickySecondRect.top - navbarRect.height + 'px')
  }, [])
  const [backdrop, openbackdrop] = React.useState(false)
  const handleOpenNav = () => {
    document.getElementById('collapseNav').classList.add('collapse-nav-con-show')
    openbackdrop(true)

  }
  const handleCloseNav = () => {
    document.getElementById('collapseNav').classList.remove('collapse-nav-con-show')
    openbackdrop(false)
  }
  return (
    initialData &&
    <>

      {backdrop && <div className='backdrop'>

      </div>}

      <div className='mob-price-div shadow-top'>
        <div className='bg-white relative flex justify-between items-center'>
          {initialData.offers ? <div>
            <span className='packprice'>PACKAGE PRICE</span>
            <div className=''><strike><span className='cheapprice'>&#8377; 6557</span></strike></div> <div><span className='orgprice'>&#8377; 45656</span></div>

          </div>:<div>
            <span className='packprice'>PACKAGE PRICE</span>
            <div className=''></div> <div><span className='orgprice'>&#8377; {initialData.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></div>

          </div>
          }
          <div className='flex items-center gap-4'>
          
            <RiShareFill fontSize={25}/>
            <RiWhatsappFill fontSize={25} className='whatsappcolor'/>
            <BiPhoneCall fontSize={25}/>
            <button className='gradientbg btn packcost'>Book Now</button>

          </div>





          {/* <div className="bg-white   flex flex-col items-start ">
            <span>PACKAGE PRICE</span>
            <div className='mb-1 mt-4'><strike><span className='cheapprice'>&#8377; 6557</span></strike></div> <div><span className='orgprice'>&#8377; 45656</span><span className='perpersontag'>per person</span></div>
          </div>
          <div className='bg-white px-4 py-4 '>
            <button className='gradientbg btn'>Book Now</button>
          </div> */}



        </div>






      </div>
      <div id='collapseNav' className='collapse-nav-con hidden-desk'>

        <div className='collapse-nav  bg-white shadow  '>
          <div className='flex justify-between gradientbg rounded-10'>
            <img className='collapse-nav-img' src='https://res.cloudinary.com/difxlqrlc/image/upload/v1692968362/site/Trouvailler_Green_rab5ud.png' />
            <RiCloseFill fontSize={20} color='white' onClick={handleCloseNav} />
          </div>

          <ul >
            <li><a href="">Home</a></li>
            <li><a href="">Holiday Packages</a></li>
            <li><a href="">Hotels and Home stays</a></li>
            <li><a href="">Bid now</a></li>

          </ul>
          <div className='collapse-nav-end'>
            <ul>
              <li className='collapse-nav-end-btn '>
                <a href=""><RiWhatsappFill className='whatsappcolor' fontSize={25} />Customise your Trip</a>
              </li>
            </ul>
            <div className='flex flex-col px-4 py-4 gap-2 font-links '>
              <a href="" className='text-link'>Terms and Conditions</a>
              <a href="" className='text-link'>Privacy Policy</a>

            </div>
            <div className='px-4 py-4 flex gap-1'>
              <a href="" className='text-lightblack'><RiInstagramFill fontSize={20} /></a>
              <a href="" className='text-lightblack'><RiFacebookBoxFill fontSize={20} /></a>
              <a href="" className='text-lightblack'><RiYoutubeFill fontSize={20} /></a>
            </div>
          </div>

        </div>
      </div>
      <div id="navbar" className='navbar flex items-center justify-between res-padding'  >
        <div>
          <img src='https://res.cloudinary.com/difxlqrlc/image/upload/v1692968362/site/Trouvailler_Green_rab5ud.png' />
        </div>
        <GiHamburgerMenu className='hidden-desk' onClick={handleOpenNav} />
        <div className='hidden-mob'>
          <ul className='flex '>
            <li><a href="" className='font-16'>Home</a></li>
            <li><a href="" className='font-16'>Holiday Packages</a></li>
            <li><a href="" className='font-16'>Hotels</a></li>
            <li><a href="" className='font-16'>Bid for stay</a></li>

          </ul>
        </div>

      </div>





      {initialData && <div className='header res-padding flex justify-between sticky-first'>
        <div className='flex flex-col items-start '>
          <div className='gap-8 gap-4-sm flex mb-4  items-start'>
            <span className='text-title'>{initialData.title}
            </span><span className='duration-tag'>{initialData.duration}</span>
          </div>
          <div className='font-links text-urls'><span>Home &gt; Holiday Packages &gt; {initialData.title}</span></div>
        </div>






      </div>}



      {initialData &&
        <div className='header-2 flex flex-col-mob res-padding gap-4  mb-20'>
          <div className='w-70 w-100-mob'>
            <div className='flex flex-col-sm gap-4 gap-2-mob'>
              <div className='w-70 w-100-mob relative'>

                <img src={initialData.images[0]} className='w-100 rounded ' />

              </div>
              <div className='w-30 w-100-mob flex flex-col flex-row-mob gap-3333'>
                {initialData.images.slice(1, 4).map((itm, i) => (
                  <div className='h-31 h-100-mob w-32-mob relative'>
                    <img src={itm} className='w-100  rounded absolute relative-mob  object-cover top-0 left-0 h-100 w-100' />
                  </div>
                ))}

              </div>


            </div>

            <div className='mt-8 flex items-center gap-4 gap-2-mob flex-wrap'>
              <span className='flex items-center font-links gap-2 gap-1-mob text-xs bg-white shadow px-4 px-2-mob py-2 rounded'><AiFillTags />{initialData.category}</span>
              <span className='flex items-center font-links gap-2 gap-1-mob text-xs bg-white shadow px-4 px-2-mob py-2 rounded'><MdLocationPin />{initialData.location}</span>
              <span className='flex items-center font-links gap-2 gap-1-mob text-xs bg-white shadow px-4 px-2-mob py-2 rounded'><AiFillClockCircle />{initialData.duration}</span>
              <span className='flex items-center font-links gap-2 gap-1-mob text-xs bg-white shadow px-4 px-2-mob py-2 rounded hidden-desk'><BiCustomize />Customisable</span>

            </div>
            <div className='bg-white mt-8 px-4 py-4'>

              <p className='description'>{initialData.description}</p>
            </div>



            <div className='px-4 py-4  bg-white mt-8'>
              <h3>Trip Plan</h3>
              <div className='py-8 px-4 only-pl '>

                {initialData.schedule.map((itm, i) => (
                  <div className='relative border-schedule py-8 pb-12 pb-8-mob px-4 only-pl'>
                    <h3 className='dayTitle'>Day {i + 1} - {itm.dayTitle}</h3>
                    <div className='circle-filled'></div>
                    <p className='text-grey whitespace px-4 only-pl dayDesc'>{itm.dayDesc}</p>
                  </div>
                ))}

              </div>
            </div>






            <div className='flex gap-2p flex-col-mob'>
              <div className='mt-8 bg-white px-4 py-4  w-49'>
                <h3 className='sec-headings'>Inclusions</h3>
                <ul className='py-4 px-8  font-links text-grey'>
                  {initialData.features.map(itm => (
                    <li>{itm}</li>
                  ))}
                </ul>
              </div>
              <div className='mt-8 bg-white px-4 py-4  w-49 activities'>
                <h3 className='sec-headings'>Activities</h3>
                <ul className='py-4 text-grey'>
                  {initialData.activities.map(itm => (
                    <li className='flex gap-2 items-start font-links mb-2'><PiFlagPennantFill className='text-green' />{itm}</li>
                  ))}
                </ul>
              </div>
            </div>



            <div className='px-4 py-4 bg-white mt-8 mb-20-mob'>
              <div className='flex justify-between'>
                <h3>Gallery</h3>
                <button className='viewmorebtn'>View more</button>

              </div>
              <div className='py-4 flex flex-wrap gap-2p'>
                {initialData.images.map(itm => (
                  <img src={itm} alt="" className='w-32 mb-2' />
                ))}
              </div>
            </div>





          </div>







          <div id="sticky-second" className='w-30  ml-4 align-self  sticky-second hidden-mob'>
            <div className="bg-darkblue shadow flex flex-col items-start">
              <span className='customisable-tag flex items-center gap-2'><BiCustomize />Customisable</span>
              <div className='mb-1 mt-4'><strike><span className='cheapprice'>&#8377; 6557</span></strike></div> <div><span className='orgprice'>&#8377; 45656</span><span className='perpersontag'>per person</span></div>
            </div>
            <div className='bg-white px-4 py-4 '>
              <button className='gradientbg btn'>Book Now</button>
            </div>

            <div className='bg-white mt-4 pt-4 shadow'>
              <div className='px-4'>
                <span className='font-links' >Want to customise this package?</span>

              </div>
              <div className='flex flex-col mt-4 book'>
                <span className='flex gap-2 font-bold px-4 gradientbg text-white py-4 font-links'><BiPhoneCall />Call Us now</span>
                <span className='flex gap-2 font-bold px-4 gradientbg text-white py-4 font-links'><RiWhatsappFill className='whatsappcolor' />WhatApp</span>
                <span className='flex gap-2 font-bold px-4 gradientbg text-white py-4 font-links'><RiCustomerServiceFill />Get a Callback</span>
              </div>
            </div>

            <div className='mt-8 bg-white px-4 py-4 shadow '>
              <span className='flex items-center gap-2 font-links'><RiWhatsappFill className='whatsappcolor icon-font' /> Share on WhatsApp</span>
            </div>

          </div>

        </div>}



      <div className='footer hidden-mob mt-8 gradientbg py-4'>

        <div className='flex justify-between items-center mx-20 footer-end' >
          <img src='https://res.cloudinary.com/difxlqrlc/image/upload/v1692968362/site/Trouvailler_Green_rab5ud.png' className='footer-logo' />
          <div className='flex items-center gap-4 text-cfcfcf'>
            <a href="" className='text-cfcfcf font-12'>Terms & Conditions</a>
            <a href="" className='text-cfcfcf font-12'>Privacy Policy</a>
            <a href="" className='text-cfcfcf'><RiInstagramFill fontSize={20} /></a>
            <a href="" className='text-cfcfcf'><RiFacebookBoxFill fontSize={20} /></a>
            <a href="" className='text-cfcfcf'><RiYoutubeFill fontSize={20} /></a>

          </div>
        </div>
      </div>





    </>
  );
}

export default App;
