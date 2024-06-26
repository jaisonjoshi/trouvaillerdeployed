import { Navbar } from "@/components/Navbar";
import { DetailPackageHeader } from "@/components/PackagePage/DetailPackageHeader";
import { Footer } from "@/components/common/Footer";
import SearchBar from "@/components/common/SearchBar";


// const data = {
//     "_id": "65959e1a52a9c1de7cb4a5e8",
//     "uploaded": false,
//     "title": "Simply Dubai (4N)",
//     "titleImage": "http://res.cloudinary.com/difxlqrlc/image/upload/v1685736705/upload/i0hqwnzjq8v8wipkkblk.jpg",
//     "images": [
//         "http://res.cloudinary.com/difxlqrlc/image/upload/v1685736705/upload/u7rjtfpkyl18jgdl85r6.jpg",
//         "http://res.cloudinary.com/difxlqrlc/image/upload/v1685736705/upload/npzarm87uypiu6ntgexo.jpg",
//         "http://res.cloudinary.com/difxlqrlc/image/upload/v1685736708/upload/nocgpvvoj6xhpxrztk35.jpg"
//     ],
//     "shortDescription": "Experience luxury and adventure in Dubai with our all-inclusive travel package, featuring iconic landmarks, desert safaris, and exclusive experiences.",
//     "descriptionTitle": "Enjoy the Adventure",
//     "description": "\nEmbark on a captivating journey to Dubai with our exclusive tour package. Immerse yourself in the glitz and glamour of this cosmopolitan city, where modern architecture merges seamlessly with rich cultural heritage. Explore iconic landmarks such as the Burj Khalifa, indulge in world-class shopping at the Dubai Mall, and venture into the mystical deserts on an exhilarating desert safari. ",
//     "price": 27000,
//     "duration": "5 Days and 4 Nights",
//     "shortDuration": "4N/5D",
//     "category": "family",
//     "location": "Dubai",
//     "locationTags": [
//         {
//             "location": "dubai",
//             "img": "http://res.cloudinary.com/difxlqrlc/image/upload/v1707362583/upload/o3bhqlzutwvmijucnoxs.jpg",
//             "_id": "65c4491d4d566440de0921fd"
//         }
//     ],
//     "schedule": [],
//     "seo": {
//         "title": "",
//         "description": "",
//         "keywords": "",
//         "_id": "65959e1a52a9c1de7cb4a5e9"
//     },
//     "cardTags": {
//         "cardTag1": "Flight tickets included",
//         "cardTag2": "Luxury hotels and stays available",
//         "_id": "6598e50f8bb61e4daf69f771"
//     },
//     "activities": [],
//     "places": [],
//     "featured": {
//         "featured": false,
//         "order": 0,
//         "_id": "65959e1a52a9c1de7cb4a5eb"
//     },
//     "inclusions": [
//         "jnkjrn",
//         "nnlenlnerv"
//     ],
//     "exclusions": [
//         "njnwen"
//     ],
//     "__v": 0
// }
async function getData(id :string) {
    const res = await fetch(`https://api2.trouvailler.com/api/package/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
     
      return res.json()
    
}

export default async function Page({ params }: { params: { packageid: string } }) {

    const data  = await getData(params.packageid)
    
//    const data = {
//     "_id": "65959e1a52a9c1de7cb4a622",
//     "uploaded": false,
//     "title": "Manali-Kullu-Sissu",
//     "titleImage": "http://res.cloudinary.com/difxlqrlc/image/upload/v1685785229/upload/l5x9jihkfgvbc8n4yekh.jpg",
//     "images": [
//         "http://res.cloudinary.com/difxlqrlc/image/upload/v1685785242/upload/jcuivc3chbqdbgvevjtp.jpg",
//         "http://res.cloudinary.com/difxlqrlc/image/upload/v1685785237/upload/oymdyz059ho4ukslxgbr.jpg",
//         "http://res.cloudinary.com/difxlqrlc/image/upload/v1685785245/upload/wmi9wpaq0wh9bccsfk0y.jpg",
//         "http://res.cloudinary.com/difxlqrlc/image/upload/v1685785245/upload/jeekkvpcug4im0efdllz.jpg"
//     ],
//     "shortDescription": "Experience the thrill of the Himalayas in Manali, Kullu, and Sissu, where adventure meets tranquility amidst breathtaking landscapes.",
//     "descriptionTitle": "Himalayan Adventures: Exploring Manali, Kullu, and Sissu",
//     "description": "Manali, nestled in the majestic Himalayas of Himachal Pradesh, is a popular hill station known for its scenic beauty and adventure activities. Surrounded by snow-capped mountains, it offers a range of outdoor pursuits like trekking, skiing, and paragliding. Nearby, Kullu enchants visitors with its lush valleys, ancient temples, and vibrant local markets. Sissu, a serene village in Lahaul Valley, offers tranquility amidst breathtaking landscapes and is a gateway to explore the untouched beauty of the region.\n\nPackage cost:\nWhen 2 members are traveling: 8499 per head.\nWhen 3 or more members are traveling: 7499 per head.",
//     "price": 7499,
//     "category": "Family",
//     "duration": "4 Nights 5 Days",
//     "shortDuration": "4N/5D",
//     "location": "Manali",
//     "locationTags": [
//         {
//             "location": "manali",
//             "img": "http://res.cloudinary.com/difxlqrlc/image/upload/v1707362183/upload/kbnrgvgexiwmopy7em0e.jpg",
//             "_id": "65c447904d566440de091f96"
//         },
//         {
//             "location": "kullu",
//             "img": "http://res.cloudinary.com/difxlqrlc/image/upload/v1707362265/upload/iindcei16urgg4sfdxbo.jpg",
//             "_id": "65c448534d566440de091fad"
//         },
//         {
//             "location": "sissu",
//             "img": "http://res.cloudinary.com/difxlqrlc/image/upload/v1707362380/upload/aeojlcubzumjtkujiu2k.jpg",
//             "_id": "65c448534d566440de091fae"
//         }
//     ],
//     "schedule": [
//         {
//             "dayTitle": "Delhi to Manali (Volvo Bus)",
//             "dayDesc": "Board bus to Manali by evening from Delhi \n",
//             "_id": "647b098c8af2ec7385b6b323"
//         },
//         {
//             "dayTitle": " Manali Local sightseeing",
//             "dayDesc": " After reaching Manali by morning (before 10 am)\nMeet out representative and proceed to hotel. (Early check-in is subjected to availability)\nAfter freshup, let's go for Manali local sightseeing \nHadimba Temple \nClub house \nVashisht temple \nTibetan Buddhist monastery \nMall road\n\nOvernight stay in Hotel \n\n",
//             "_id": "647b098c8af2ec7385b6b324"
//         },
//         {
//             "dayTitle": "Solang Valley + Atal Tunnel + Sissu",
//             "dayDesc": "After breakfast proceed to Solang Valley then to Sissu through Atul tunnel.\n(you can go for rides and other activities here on your own cost)\n\nActivities: Cable car ride,Sling shot,Zipline, Skiing, Snow Sledge, Yak/horse ride & Quad bike ride (ATV) etc.",
//             "_id": "647b098c8af2ec7385b6b325"
//         },
//         {
//             "dayTitle": "Manali-Kullu-Delhi ",
//             "dayDesc": "After breakfast proceed to Kullu , where you can go for River Rafting Paragliding and other activities.\nAfter that visit famous Kullu Handlooms and Matha Vaishnava Devi Temple .\nBy evening proceed to Manai bus stand to board bus back to Delhi.\n",
//             "_id": "647b098c8af2ec7385b6b326"
//         },
//         {
//             "dayTitle": "Delhi drop",
//             "dayDesc": "Before 10am the bus will reach Delhi will drop you there with lots of memmories",
//             "_id": "647b098c8af2ec7385b6b327"
//         }
//     ],
//     "seo": {
//         "title": "",
//         "description": "",
//         "keywords": "",
//         "_id": "65959e1a52a9c1de7cb4a628"
//     },
//     "cardTags": {
//         "cardTag1": "",
//         "cardTag2": "",
//         "_id": "65959e1a52a9c1de7cb4a629"
//     },
//     "activities": [],
//     "places": [],
//     "featured": {
//         "featured": false,
//         "order": 0,
//         "_id": "65959e1a52a9c1de7cb4a62a"
//     },
//     "inclusions": [],
//     "exclusions": [],
//     "__v": 0
// }


    return(
        <>

        <head>
            <title>{data.title}</title>
            <meta name="description" content={data.seo.description} />

            <meta name="robots" content="index, follow" />

            <meta name="viewport" content="width=device-width, initial-scale=1.0" />


            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.seo.description} />
            <meta property="og:image" content={data.titleImage} />

        </head>
        <body>

        <div >
            <div className="bg-[#F3F3F3] py-4 ">
                <Navbar darkMode={true}/>
            </div>
            <div className="hidden md:block">
                <SearchBar />
            </div>
            {/* <DetailPackageHeader images={data.images}/> */}
           
            <div className=" md:py-8">
            <div className="px-4 xs:px-8 lg:px-40  mb-4  ">
                <div className="flex flex-col md:flex-row justify-between md:items-end">
                    <div className="flex flex-col gap-2">
                    <h1 className="text-[18px] md:text-[24px] lg:text-[24px]  roboto-bold">{data.title}</h1>
                    <div className="flex gap-2 items-center">
                    <h1 className="text-[13px]  lg:text-[14px] roboto-regular ">{data.duration}</h1>
                    <span className="text-[10px] md:text-[12px] roboto-regular border px-3 py-[1px] rounded border-[#b5b5b5] ">Customisable</span>
                    </div>
                    </div>
                    <div>
                       <div className="flex items-end gap-2 md:gap-4 my-4 md:my-0 md:mt-0">
                       <span className="bg-[#174978] text-[white] roboto-regular px-4 md:px-6 py-[2px] md:py-2 rounded-full text-[12px]">{data.category.charAt(0).toUpperCase()+ data.category.slice(1)}</span>
                        
                       </div>
                    </div>
                </div>
                {/* <hr className="mt-8"/> */}

            </div>
           
           
            <div className="px-4 xs:px-8 lg:px-40 flex mt-8 flex gap-[1%]">
                <div className="w-[55%]">
                    <img src={data.titleImage} className="rounded-l-[10px]"/>

                </div>
                <div className="w-[44%] flex flex-wrap gap-[2%]">
                    {data.images.slice(0,4)?.map((item :any, index :any)=>(
                        <div key={index} className="w-[49%] relative">
                            <img src={item} alt="" className={`object-cover w-full h-full ${index == 3 ? "rounded-br-[10px]": ""} ${index == 1 ? "rounded-tr-[10px]": ""}`}/>
                            {index == 3 && <div className="bg-[white] absolute bottom-2 right-2 flex items-center px-2 py-2 cursor-pointer shadow-xl gap-2 rounded ">
                                <img src="/images/icons/imagesicon.png" alt="" className="w-[15px]" />
                                <span className="roboto-regular text-xs">View Gallery</span>
                            </div>}
                        </div>
                    ))}

                </div>
            </div>

                

            </div>

            <div className="px-4 xs:px-8 lg:px-40  flex mb-16 ">
                <div className="w-[100%] xl:w-[60%]">
                    <div className="bg-[white]  border-b " >
                    <h1 className="text-[20px]  md:text-[20px]   roboto-bold">{data.descriptionTitle}</h1>
                    <p className="  mt-2 md:mt-4 text-[13px] md:text-[15px] roboto-regular text-[#4a4a4a]">{data.description}</p>
                    <div className="flex mt-4 md:mt-8 flex-wrap">
                       { data.inclusions && data.inclusions.length > 0 && <div className="w-full sm:w-auto sm:grow">
                            <h1 className="text-sm md:text-base roboto-medium">Package Inclusions</h1>
                            <ul className=" mt-2 md:mt-4">
                            {data.inclusions?.map((item:any, index:any)=> (
                                <li className="flex gap-2 items-start mb-1" key={index}>
                                   <div>
                                   <img src="/images/icons/tick.png" alt="" className="mt-[5px] md:mt-0 w-4 md:w-6"/>
                                   </div>
                                    <div>
                                    <span className="text-xs md:text-sm roboto-regular">{item}</span>
                                    </div>
                                </li>
                            ))}
                               
                               
                            </ul>

                        </div>}
                       { data.exclusions && data.exclusions.length > 0 && <div className="w-full sm:w-auto sm:grow mt-4 sm:mt-0">
                            <h1 className="text-sm md:text-base roboto-medium">Package Exclusions</h1>
                            <ul className=" mt-4">
                               
                               
                                {data.exclusions?.map((item:any, index:any)=> (
                                
                                    <li className="flex gap-2 items-start mb-1" key={index}>
                                    <div>
                                    <img src="/images/icons/Close.png" alt="" className="mt-[5px] md:mt-0 w-4 md:w-6"/>
                                    </div>
                                        <div>
                                        <span className="text-xs md:text-sm roboto-regular">{item}</span>
                                        </div>
                                </li>))}
                            </ul>
                        </div>}
                    </div>
</div>
                   { data.schedule && data.schedule.length > 0 && <div>
                    <h1 className="text-[20px] md:text-[20px]   roboto-bold mt-8">Itinerary</h1>
                    <p className="  mt-2 text-[13px] md:text-[15px] roboto-regular text-[#4a4a4a]">We have carefully planned out each day to give you the best possible experience. From exploring historic landmarks to tasting delicious local cuisine, each day is packed with adventure and excitement. </p>


                    <div className="mt-8 ">
                       { data.schedule?.map((item:any ,index:number)=>(
                        <div key={index} className={`border-l-[2px] border-l-[#32b432] ${index != 0 ? "pt-8" : ""} `}>
                           <div className="relative">
                            <div className="absolute top-[50%] translate-y-[-50%] left-0 translate-x-[-50%] w-[10px] h-[10px] bg-[#32b432] rounded-full" >

                            </div>
                           <h1 className="text-[#32b432] ml-[15px] text-[16px] md:text-[16px] roboto-bold">Day {index+1} <span className="text-black"> - {item.dayTitle}</span></h1>
                            
                           </div>
                           <p className=" text-[13px] md:text-[14px] roboto-regular ml-[15px] mt-2 text-[#6e6e6e]">{item.dayDesc}</p>
                        </div>
                       ))}
                       
                       
                    </div>
                    </div>}

                        {data.places && data.places.length>0 && <div>
                            
                        <h1 className="text-[20px] md:text-[18px]   roboto-bold mt-12 md:mt-20">Places to Visit</h1>
                                            <p className="  mt-4 text-[13px] md:text-[14px] roboto-regular text-[#4a4a4a]">We have carefully planned out each day to give you the best possible experience. From exploring historic landmarks to tasting delicious local cuisine, each day is packed with adventure and excitement. </p>

                                            <div className="flex mt-8 gap-[10%] flex-wrap">
                                                {data.places && data.places?.map((item : any, index:any)=>( <div className="w-[45%] relative mb-4" key={index}>
                                                    <img src={item.img} alt="" className="w-full aspect-video skeleton rounded" />
                                                    <div className="absolute gradient-2 top-0 left-0 right-0 bottom-0 rounded" >

                                                    </div>
                                                    <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
                                                        <h1 className="text-sm md:text-base roboto-bold text-white">{item.place}</h1>
                                                    </div>
                                                </div>
                                               )) }
                                            
                                            
                                                
                                            </div>
                        </div>}
                  


                </div>
                <div className="w-[40%]    hidden xl:block roboto-regular">
                   <div className="w-full flex flex-col justify-start items-end sticky top-12">
                   <div className="w-[80%] border bg-[white] px-4 pt-4   rounded-[5px]">
                        <div className="  pb-4 ">
                            {/* <div className="flex flex-col">
                                <span className="  text-[#585858] text-[12px]">Price</span>
                                <span className="text-[18px] ">From</span>
                            </div> */}
                            <div className="flex  justify-between">

                            <div className=" flex flex-col items-start  text-[15px] xs:text-[24px]">

                               <span className=" text-xs   flex gap-1 items-end  "> <span className='text-base roboto-bold  lg:text-2xl'>₹</span><span className="text-2xl roboto-bold">{data.price.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></span>
                               <span className="text-xs text-[grey]">Per Person</span>
                                </div>
                                <div className=" flex flex-col items-end w-[50%]">
                                    <img src="/images/icons/emiicon.png" alt=""  className="w-[50%]"/>
                                    <span className="text-[10px] robot-regular text-[grey]">Talk with our agent for EMI details</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex gap-2 items-center my-4 cursor-pointer">
                            <img src="/images/icons/wag.png" alt="" className="w-8"/>
                            <span className="mt-1 font-semibold text-[#585858]"> Share this Package</span>
                        </div> */}
                        <hr />
                        <div className="mb-4 mt-4">
                            <a href={`https://wa.me/917907160314?text=I%20would%20like%20to%20know%20more%20about%20${data.title}%20package%0Ahttps://trouvailler.com/travelpackage/${data._id}`}><button className="bg-[#011d45] w-full rounded py-3 text-sm roboto-bold text-white ">Proceed to Booking</button></a>
                        </div>
                    </div>
                    <div className="w-[80%] border   mt-8 mb-8 sticky top-0 rounded-[5px]">
                        <h1 className="mt-4 roboto-medium px-4 text-sm">Need to customise this package for you?</h1>
                        <div className="flex gap-4 items-center mt-4 py-2 cursor-pointer bg-[#1582d824] px-4">
                            <img src="/images/icons/call.png" alt="" className="w-10"/>
                           <div className="flex flex-col">
                           <span className="mt-1 reobot-medium text-xs text-[#585858]">Call us now</span>
                           <span className="font-bold">+91 7907160314</span>
                           </div>
                        </div>
                        
                    </div>
                    <div className="w-[80%] border  relative mt-4 mb-8 sticky top-0 rounded-[10px] flex">
                        <div className="absolute w-[100%] h-full top-0 left-0  bottom-0 z-[10000] rounded-[10px] bg-gradient-to-r from-[#090740]  from-30% via-[#020137f7] via-50% to-[#ffffff00]  to-90%">

                        </div>
                        <div className="w-[50%] z-[10000000] text-[white] justify-center items-start pl-4  flex flex-col roboto-medium">
                            <span className="text-[11px] mb-1">Travelling with your group?</span>
                            <span className="text-[13px]">Great Discounts awaits you!</span>
                            <button className="text-xs bg-[#1a9c65] px-2 py-1 rounded mt-2">Get a Callback</button>
                        </div>
                        <div className="w-[50%]">
                        <img src="/images/grp.jpg" className="w-full rounded-[10px]" alt="" />

                        </div>
                        
                    </div>
                   </div>
                </div>
            </div>
        <div className="bg-[#174978] fixed bottom-0 left-0 right-0 py-2 px-4 flex justify-between items-center xl:hidden">
            <div className=" flex flex-col items-start text-white  text-[18px] xs:text-[24px]">

                               <span className="font-extrabold    flex gap-1 items-center "> <span className='text-xl xs:text-2xl'>₹</span><span>{data.price.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></span>
                               <span className="text-[10px] xs:text-[14px] text-[#e9e9e9]">Per Person</span>

                                </div>
                                <div className="flex gap-3 items-center">
                                <a className="bg-[#1bbc9b] w-full rounded py-1 px-2 text-base text-white font-medium" href={`https://wa.me/918129177335?text=I would like to know more about ${data.title} package https%3A%2F%2Ftrouvailler.com%2Ftravelpackage%2F${data._id}`}><button className="">Book Now</button></a>

                                    <img src="/images/icons/wa.png" className="w-6" alt="" />
                                </div>

            
        </div>

          <div className="hidden xl:block">
          <Footer />
          </div>
        </div>
        </body>
        
        
        </>

        
    )
  }