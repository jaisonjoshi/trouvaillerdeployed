import { Navbar } from "@/components/Navbar";
import { DetailPackageHeader } from "@/components/PackagePage/DetailPackageHeader";
import { Footer } from "@/components/common/Footer";
import SearchBar from "@/components/common/SearchBar";

async function getData(id :string) {
    const res = await fetch(`https://api2.trouvailler.com/api/package/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
     
      return res.json()
    
}

export default async function Page({ params }: { params: { packageid: string } }) {

    const data = await getData(params.packageid)
   console.log(data)
    



    return(

        <div >
            <div className="bg-[#F3F3F3] py-4 ">
                <Navbar darkMode={true}/>
            </div>
            <div className="hidden md:block">
                <SearchBar />
            </div>
            <div className="bg-[#F3F3F3] md:py-8">

            <DetailPackageHeader images={data.images}/>
            <div className="px-4 xs:px-8 lg:px-20  2xl:px-40 pt-4 md:pt-8 lg:pt-12">
                <div className="flex flex-col md:flex-row justify-between md:items-end">
                    <div className="flex flex-col gap-2">
                    <h1 className="text-[18px] md:text-[24px] lg:text-[32px] poppins font-bold">{data.title}</h1>
                    <div className="flex gap-2 items-center">
                    <h1 className="text-[13px] md:text-[16px] lg::text-[20px] ">{data.duration}</h1>
                    <span className="text-[10px] md:text-[14px] border px-3 py-[1px] rounded border-[#b5b5b5] font-bold">Customisable</span>
                    </div>
                    </div>
                    <div>
                       <div className="flex items-end gap-2 md:gap-4 my-4 md:my-0 md:mt-0">
                       <span className="bg-[#174978] text-[white] font-bold px-4 md:px-6 py-[2px] md:py-2 rounded-full text-[10px] lg:text-sm">Family</span>
                        <span className="bg-[#174978] text-[white] font-bold px-4 md:px-6 py-[2px] md:py-2 rounded-full text-[10px] lg:text-sm">Group</span>
                        
                       </div>
                    </div>
                </div>
            </div>

                
                

            </div>

            <div className="px-4 xs:px-8 lg:px-20  2xl:px-40 pt-8 md:pt-12 flex mb-16">
                <div className="w-[100%] xl:w-[60%]">
                    <h1 className="text-[20px] md:text-[22px] poppins font-semibold">{data.descriptionTitle}</h1>
                    <p className="poppins mt-2 md:mt-4 text-[13px] md:text-[16px] text-[#4a4a4a]">{data.description}</p>
                    <div className="flex mt-4 md:mt-8 flex-wrap">
                        <div className="w-full sm:w-auto sm:grow">
                            <h1 className="text-sm md:text-lg font-semibold">Package Inclusions</h1>
                            <ul className="pl-2 mt-2 md:mt-4">
                                <li className="flex gap-2 items-start mb-1">
                                   <div>
                                   <img src="/images/icons/tick.png" alt="" className="mt-[5px] md:mt-0 w-4 md:w-6"/>
                                   </div>
                                    <div>
                                    <span className="text-xs md:text-base">Inclusion 1</span>
                                    </div>
                                </li>
                              
                               
                                <li className="flex gap-2 items-start mb-1">
                                   <div>
                                   <img src="/images/icons/tick.png" alt="" className="mt-[5px] md:mt-0 w-4 md:w-6"/>
                                   </div>
                                    <div>
                                    <span className="text-xs md:text-base">Inclusion 1</span>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div className="w-full sm:w-auto sm:grow mt-4 sm:mt-0">
                            <h1 className="text-sm md:text-lg font-semibold">Package Exclusions</h1>
                            <ul className="pl-2 mt-4">
                                <li className="flex gap-2 items-start mb-1">
                                   <div>
                                   <img src="/images/icons/Close.png" alt="" className="mt-[5px] md:mt-0 w-4 md:w-6"/>
                                   </div>
                                    <div>
                                    <span className="text-xs md:text-base">Inclusion 1</span>
                                    </div>
                                </li>
                                <li className="flex gap-2 items-start mb-1">
                                   <div>
                                   <img src="/images/icons/Close.png" alt="" className="mt-[5px] md:mt-0 w-4 md:w-6"/>
                                   </div>
                                    <div>
                                    <span className="text-xs md:text-base">Inclusion 1</span>
                                    </div>
                                </li>
                                <li className="flex gap-2 items-start mb-1">
                                   <div>
                                   <img src="/images/icons/Close.png" alt="" className="mt-[5px] md:mt-0 w-4 md:w-6"/>
                                   </div>
                                    <div>
                                    <span className="text-xs md:text-base">Inclusion 1</span>
                                    </div>
                                </li>
                                <li className="flex gap-2 items-start mb-1">
                                   <div>
                                   <img src="/images/icons/Close.png" alt="" className="mt-[5px] md:mt-0 w-4 md:w-6"/>
                                   </div>
                                    <div>
                                    <span className="text-xs md:text-base">Inclusion 1</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1 className="text-[20px] md:text-[22px] poppins font-semibold mt-8">Itinerary</h1>
                    <p className="poppins mt-4 text-[13px] md:text-[16px] text-[#4a4a4a]">We have carefully planned out each day to give you the best possible experience. From exploring historic landmarks to tasting delicious local cuisine, each day is packed with adventure and excitement. </p>


                    <div className="poppins">
                       { data.schedule?.map((item:any ,index:number)=>(
                        <div className="border-b-[2px] mt-8 border-b-[#1bbc9cd1]">
                            <h1 className="text-[#1bbc9b] text-[16px] md:text-[20px] font-bold">Day {index+1} <span className="text-black"> - {item.dayTitle}</span></h1>
                            <p className="mt-4 mb-3 md:mb-6 text-[13px] md:text-[16px] text-[#6e6e6e]">{item.dayDesc}</p>
                        </div>
                       ))}
                       
                       
                    </div>


                    <h1 className="text-[20px] md:text-[22px] poppins font-semibold mt-12 md:mt-20">Places to Visit</h1>
                    <p className="poppins mt-4 text-[13px] md:text-[16px] text-[#4a4a4a]">We have carefully planned out each day to give you the best possible experience. From exploring historic landmarks to tasting delicious local cuisine, each day is packed with adventure and excitement. </p>

                    <div className="flex mt-8 gap-[10%] flex-wrap">
                        <div className="w-[45%] relative mb-4">
                            <img src="/images/taj.jpeg" alt="" className="w-full aspect-video skeleton rounded" />
                            <div className="absolute gradient-2 top-0 left-0 right-0 bottom-0 rounded" >

                            </div>
                            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
                                <h1 className="text-sm md:text-xl font-bold text-white">Taj Mahal</h1>
                            </div>
                        </div>
                        <div className="w-[45%] relative mb-4">
                            <img src="/images/taj.jpeg" alt="" className="w-full aspect-video skeleton rounded" />
                            <div className="absolute gradient-2 top-0 left-0 right-0 bottom-0 rounded" >

                            </div>
                            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
                                <h1 className="text-sm md:text-xl font-bold text-white">Taj Mahal</h1>
                            </div>
                        </div>
                        <div className="w-[45%] relative mb-4">
                            <img src="/images/taj.jpeg" alt="" className="w-full aspect-video skeleton rounded" />
                            <div className="absolute gradient-2 top-0 left-0 right-0 bottom-0 rounded" >

                            </div>
                            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
                                <h1 className="text-sm md:text-xl font-bold text-white">Taj Mahal</h1>
                            </div>
                        </div>
                        <div className="w-[45%] relative mb-4">
                            <img src="/images/taj.jpeg" alt="" className="w-full aspect-video skeleton rounded" />
                            <div className="absolute gradient-2 top-0 left-0 right-0 bottom-0 rounded" >

                            </div>
                            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
                                <h1 className="text-sm md:text-xl font-bold text-white">Taj Mahal</h1>
                            </div>
                        </div>
                        
                    </div>
                  


                </div>
                <div className="w-[40%]  poppins hidden xl:block">
                   <div className="w-full flex flex-col justify-start items-end sticky top-0">
                   <div className="w-[80%] shadow-custom px-8 pt-8  bg-[#e7e7e76d] rounded-[10px]">
                        <div className="flex justify-between border-b pb-4 border-b-[#1bbc9cd1]">
                            <div className="flex flex-col">
                                <span className="font-bold  text-[#585858] text-[16px]">Price</span>
                                <span className="text-[24px] font-bold">From</span>
                            </div>
                            <div>
                            <div className=" flex flex-col items-end  text-[15px] xs:text-[24px]">
                            <span className="text-[10px] xs:text-[14px] text-[#585858]">Per Person</span>

                               <span className="font-extrabold roboto flex gap-1 items-center "> <span className='text-base xs:text-2xl'>₹</span><span>{data.price.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center my-4 cursor-pointer">
                            <img src="/images/icons/wag.png" alt="" className="w-8"/>
                            <span className="mt-1 font-semibold text-[#585858]"> Share this Package</span>
                        </div>
                        <div className="my-8">
                            <button className="bg-[#1bbc9b] w-full rounded py-4 text-xl text-white font-bold">Book Now</button>
                        </div>
                    </div>
                    <div className="w-[80%] shadow-custom px-8  mt-8 mb-8 sticky top-0 bg-[#e7e7e76d] rounded-[10px]">
                        <h1 className="mt-4 font-bold text-lg">Need to customise this package for you?</h1>
                        <div className="flex gap-4 items-center my-4 cursor-pointer">
                            <img src="/images/icons/call.png" alt="" className="w-10"/>
                           <div className="flex flex-col">
                           <span className="mt-1 font-semibold text-[#585858]">Call us now</span>
                           <span className="font-bold">+91 9562523642</span>
                           </div>
                        </div>
                        
                    </div>
                   </div>
                </div>
            </div>
        <div className="bg-[#174978] fixed bottom-0 left-0 right-0 py-2 px-4 flex justify-between items-center xl:hidden">
            <div className=" flex flex-col items-start text-white  text-[18px] xs:text-[24px]">

                               <span className="font-extrabold roboto flex gap-1 items-center "> <span className='text-xl xs:text-2xl'>₹</span><span>{data.price.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}</span></span>
                               <span className="text-[10px] xs:text-[14px] text-[#e9e9e9]">Per Person</span>

                                </div>
                                <div className="flex gap-3 items-center">
                                    <button className="bg-[#1bbc9b] text-white font-bold px-4 py-1 rounded outline-none shadow-xl">Book Now</button>
                                    <img src="/images/icons/wa.png" className="w-6" alt="" />
                                </div>

            
        </div>

          <div className="hidden xl:block">
          <Footer />
          </div>
        </div>
    )
  }