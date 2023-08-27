import React from 'react';

function App() {
  const [count, setCount] = React.useState(0)
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
    "features": [],
    "activities": [],
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
  const inc = () => {
    setCount(count + 1)
  }

  const dec = () => {
    setCount(count - 1)
  }
  return (
    <>
      <div>
        <div className='navbar'>
          <img src="https://res.cloudinary.com/difxlqrlc/image/upload/v1692968362/site/Trouvailler_Green_rab5ud.png" />
          <ul>
            <li>Home</li>
            <li>Hotels</li>
            <li>Packages</li>
            <li>Bid now</li>

          </ul>
        </div>





        <div className='header'>
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <h2>{initialData.title}</h2>
              <span className='tag'>{initialData.duration}</span>
            </div>
            <p>Home &gt; Tour Packages &gt; {initialData.title}</p>
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-col gap-2'>
              <span>Book now</span>
              <button className='btn '>Proceed to Booking</button>
            </div>
            <div>
              {packs.offers ?

                (<div className='text-right'>
                  <span className='p-1 bg-f8d2d2 font-bold text-red'>{packs.offertitle}</span>
                  <p className='mt-2'>{packs.offerdescription}</p>
                  <span ><span className='text-2xl '><b>&#8377; {packs.offerprice} </b></span><strike className=''>&#8377; {packs.cheapestPrice} </strike></span><br />
                  <span className='text-sm text-red'>per person</span>

                </div>) :
                (<div className=' flex flex-col text-right'>
                  <h1 className='font-bold text-3xl  '>&#8377; {packs.cheapestPrice && packs.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</h1>
                  <span className=' text-xs'>Per person</span>

                </div>)}
            </div>
          </div>
        </div>


    




      </div>

    </>
  );
}

export default App;
