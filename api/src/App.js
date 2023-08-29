import React, { useEffect } from 'react';
import { BiImages, BiCustomize, BiPhoneCall } from "react-icons/bi";
import { RiCustomerServiceFill, RiWhatsappFill,RiCloseFill, RiInstagramFill, RiFacebookBoxFill, RiYoutubeFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { AiFillTags, AiFillClockCircle } from "react-icons/ai";
import { PiFlagPennantFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  const packs =
  {
    "_id": "649847b83649edf20bffb415",
    "title": "Mysore - Coorg - Chikmagaluru 5 nights 6 days",
    "description": "Coorg considered as one of the most beautiful destinations near Bangalore. Also known as, Kodagu region, this destination is a beautiful blend of the scenic attraction mixed with rich heritage. It has preserved its natural beauty and known for eco-friendly lifestyle of locals. The presence of gorgeous tea gardens, waterfalls, viewpoints, heritage spots and forests make Coorg tourism worth a trip.Coorg is a popular destination among the travellers from all around the world who seek natural beauty and scenic greenery. There are a number of wonderful attractions located in plain sight as well as around the rugged terrains in midst of evergreen forests. Coorg trip is perfect for nature lovers, photographers, trekkers, cycling enthusiasts as well as those who just wish to laze around and find a break from monotonous city life.",
    "location": "📍mysore,coorg,chikmagaluru",
    "locations": [
      " coorg",
      " chikmagaluru",
      "mysore"
    ],
    "duration": "5N/6D",
    "cheapestPrice": 14500,
    "features": ["hello from other world", "yes im here"],
    "activities": ["hello", "how are you", "im fine", "whatsapp"],
    "offers": false,
    "images": [
      "http://res.cloudinary.com/difxlqrlc/image/upload/v1687701430/upload/eurfyddjlahmerf0sjy2.jpg",
      "http://res.cloudinary.com/difxlqrlc/image/upload/v1687701431/upload/ykip03zzrmvp7gqmptax.jpg",
      "http://res.cloudinary.com/difxlqrlc/image/upload/v1687701430/upload/wk4shw56py2yn0hj52mu.jpg",
      "http://res.cloudinary.com/difxlqrlc/image/upload/v1687701430/upload/xppuqnikekrus01wand2.jpg",
      "http://res.cloudinary.com/difxlqrlc/image/upload/v1687701431/upload/tcn5dor17mt893o04flc.jpg"
    ],
    "schedule": [
      {
        "dayTitle": "Mysore",
        "dayDesc": "Arrive Mysore Railwat Station/Airport.Check-in to Hotel.\nAfter Breakfast we check-out the hotel then start proceeding to Mysore, experience the city's culture and see the most famous attractions. Visit the must-see places like Mysore Palace, Brindavan Garden, St. Philomena’s Cathedral and much more. We also stop over at Tomb of Tipu Sultan at Srirangapatna on Bangalore Mysore Highway.Mysore (now called Mysuru) is 140 Kilometers for Bangalore and takes 2-3 hours to reach. Although the distance is not much, actual travel time may be higher on long weekends due to traffic. This erstwhile capital of the Kingdom of Mysore or Karnataka is a must visit destination on a trip to Bangalore or South India.\nAfter Visited ,Check-In to Our Hotel and Overnight Stay @ Mysore.",
        "_id": "649847b83649edf20bffb416"
      },
      {
        "dayTitle": " Coorg         ",
        "dayDesc": " After Breakfast we Check-Out the Hotel then proceed to Coorg. Before Reaching Coorg we must visit Nandi Hills.\nCoorg also known as Scotland of India, is famous for its coffee plantations. Being a part of the Western Ghats, Coorg is rich in flora and fauna. Madikeri is the heartland of Coorg region and was the seat of the ruling dynasty. Misty hills, lush forest, tea and coffee plantation, orange groves, undulating streets and breathtaking views have made Coorg an unforgettable holiday destination.Main Attractions :Abbey Falls,Raja Seat,Omkareshwara temple,Raja’s tomb and fort.\nAfter visited we Check-in to a Hotel.Overnight stay @ Hotel.",
        "_id": "649847b83649edf20bffb417"
      },
      {
        "dayTitle": "  Coorg ",
        "dayDesc": " After Breakfast, Start Proceed to Dubare elephant camp,Tala Kauveri and Lady Seat(Sunset Point). then proceed to Chikmagaluru.Overnight Stay @ Coorg Hotel.",
        "_id": "649847b83649edf20bffb418"
      },
      {
        "dayTitle": " Coorg – Chikmagalur ",
        "dayDesc": " After delicious Breakfast, we start drive to Chikmagalur. Enroute visit Halebid, The temples of Halebid bear mute testimony to the rich, cultural heritage of Karnataka. Check in at Hotel in Chikmagalur. Visit to Hirekolale Lake. Overnight stay at hotel.",
        "_id": "649847b83649edf20bffb419"
      },
      {
        "dayTitle": " Chikmagalur",
        "dayDesc": " Early morning breakfast. Visit to Seethalangiri, Mulayangiri, Kavikalgundi View Point, Dab Dabbe Falls, Bababudangiri, Manikhyadhara Falls & Honamanhalla. Visit to MG Park and Shopping. Overnight at hotel. ",
        "_id": "649847b83649edf20bffb41a"
      },
      {
        "dayTitle": "Chikmagalur – Belur – Mysore ",
        "dayDesc": " After Breakfast, Check out from Hotel and proceed to Yagatchi Backwater Aqua Sports. Enroute visit to Belur ,a beautiful example of Hoysala architecture and Yagatchi Dam . Famous of them is The Channekeshava Temple. Proceed towards Bangalore. “ Holiday Package Tour To Chikmagalur” trip Ends.",
        "_id": "649847b83649edf20bffb41b"
      }
    ],
    "category": "honeymoon",
    "createdAt": "2023-06-25T13:57:12.034Z",
    "updatedAt": "2023-08-14T12:38:10.045Z",
    "__v": 0
  }

  const [initialData, setInitialData] = React.useState(packs)
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
  const handleOpenNav = ()=> {
    document.getElementById('collapseNav').classList.add('collapse-nav-con-show')
    openbackdrop(true)

  }
  const handleCloseNav = ()=> {
    document.getElementById('collapseNav').classList.remove('collapse-nav-con-show')
    openbackdrop(false)
  }
  return (
    <>

    {backdrop && <div className='backdrop'>

    </div>}
     <div id='collapseNav' className='collapse-nav-con hidden-desk'>

     <div className='collapse-nav  bg-white shadow  '>
      <div className='flex justify-between gradientbg rounded-10'>
      <img className='collapse-nav-img' src='https://res.cloudinary.com/difxlqrlc/image/upload/v1692968362/site/Trouvailler_Green_rab5ud.png' />
<RiCloseFill fontSize={20} color='white' onClick={handleCloseNav}/>
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
              <a href=""><RiWhatsappFill className='whatsappcolor' fontSize={25}/>Customise your Trip</a>
            </li>
          </ul>
        <div className='flex flex-col px-4 py-4 gap-2 font-links '>
          <a href="" className='text-link'>Terms and Conditions</a>
          <a href="" className='text-link'>Privacy Policy</a>

        </div>
        <div className='px-4 py-4 flex gap-1'>
        <a href="" className='text-lightblack'><RiInstagramFill fontSize={20}/></a>
          <a href="" className='text-lightblack'><RiFacebookBoxFill fontSize={20} /></a>
          <a href="" className='text-lightblack'><RiYoutubeFill fontSize={20}/></a>
        </div>
        </div>

      </div>
     </div>
      <div id="navbar" className='navbar flex items-center justify-between res-padding'  >
        <div>
          <img src='https://res.cloudinary.com/difxlqrlc/image/upload/v1692968362/site/Trouvailler_Green_rab5ud.png' />
        </div>
        <GiHamburgerMenu className='hidden-desk' onClick={handleOpenNav}/>
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
          <div className='gap-8 flex mb-4'>
            <span className='text-lg'>Adventoro - Ladakh 6 Days
            </span><span className='duration-tag'>3D/4N</span>
          </div>
          <div className='font-links'><span>Home &gt; Holiday Packages &gt; Adventoro - Ladakh 6 Days</span></div>
        </div>






      </div>}



{initialData && 
      <div className='header-2 flex flex-col-mob res-padding gap-4 mb-20'>
        <div className='w-70 w-100-mob'>
          <div className='flex gap-4'>
            <div className='w-70 relative'>

              <img src={initialData.images[0]} className='w-100 rounded ' />

            </div>
            <div className='w-30 flex flex-col gap-3333'>
              {initialData.images.slice(1, 4).map((itm, i) => (
                <div className='h-31 relative'>
                  <img src={itm} className='w-100 rounded absolute  object-cover top-0 left-0 h-100 w-100' />
                </div>
              ))}

            </div>


          </div>

          <div className='mt-8 flex items-center gap-4 flex-wrap'>
            <span className='flex items-center font-links gap-2 bg-white shadow px-4 py-2 rounded-full'><AiFillTags />{initialData.category}</span>
            <span className='flex items-center font-links gap-2 bg-white shadow px-4 py-2 rounded-full'><MdLocationPin />{initialData.location}</span>
            <span className='flex items-center font-links gap-2 bg-white shadow px-4 py-2 rounded-full'><AiFillClockCircle />{initialData.duration}</span>

          </div>
          <div className='bg-white mt-8 px-4 py-4'>

            <p className='description'>{initialData.description}</p>
          </div>



          <div className='px-4 py-4 bg-white mt-8'>
            <h3>Trip Plan</h3>
            <div className='py-8 px-4 '>

              {initialData.schedule.map((itm, i) => (
                <div className='relative border-schedule py-8 pb-12 px-4'>
                  <h3 className='dayTitle'>Day {i + 1} - {itm.dayTitle}</h3>
                  <div className='circle-filled'></div>
                  <p className='text-grey whitespace px-4 dayDesc'>{itm.dayDesc}</p>
                </div>
              ))}

            </div>
          </div>






          <div className='flex gap-2p'>
            <div className='mt-8 bg-white px-4 py-4 w-49'>
              <h3>Inclusions</h3>
              <ul className='py-4 px-8 text-grey'>
                {initialData.features.map(itm => (
                  <li>{itm}</li>
                ))}
              </ul>
            </div>
            <div className='mt-8 bg-white px-4 py-4 w-49 activities'>
              <h3>Activities</h3>
              <ul className='py-4 text-grey'>
                {initialData.activities.map(itm => (
                  <li className='flex gap-2 items-start mb-2'><PiFlagPennantFill className='text-green' />{itm}</li>
                ))}
              </ul>
            </div>
          </div>



          <div className='px-4 py-4 bg-white mt-8'>
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







        <div id="sticky-second" className='w-30  ml-4 align-self  sticky-second'>
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
        <img src='https://res.cloudinary.com/difxlqrlc/image/upload/v1692968362/site/Trouvailler_Green_rab5ud.png' className='footer-logo'/>
        <div className='flex items-center gap-4 text-cfcfcf'>
          <a href="" className='text-cfcfcf font-12'>Terms & Conditions</a>
          <a href="" className='text-cfcfcf font-12'>Privacy Policy</a>
          <a href="" className='text-cfcfcf'><RiInstagramFill fontSize={20}/></a>
          <a href="" className='text-cfcfcf'><RiFacebookBoxFill fontSize={20} /></a>
          <a href="" className='text-cfcfcf'><RiYoutubeFill fontSize={20}/></a>

        </div>
        </div>
      </div>





    </>
  );
}

export default App;
