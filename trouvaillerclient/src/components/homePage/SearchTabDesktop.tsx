'use client'

import useDebounce from "@/hooks/useDebounce";
import Link from "next/link";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";
import { myContext, MyContext } from "../context/Context";





const Place: React.FC<{ itm: any }> = ({ itm }) => {
    return (
        <div className="min-h-[150px]  relative  flex items-end flex-wrap">
            <div className="absolute top-0 left-0 bottom-0 right-0">
                {/* <ImageDarker /> */}
                <div className="image-cover rounded-[10px]">

                </div>

                <img src={itm.image} alt="" className="w-full h-full rounded-[10px] object-cover object-bottom" />
            </div>
            <div className="relative px-2 xs:px-4 mb-4 xs:mb-4 z-10">
                <h1 className="roboto-medium text-[white] text-[16px] sm:text-[20px] lg:text-[16px] ">{itm.name.charAt(0).toUpperCase() + itm.name.slice(1)}</h1>
                {/* <p className="font-medium text-[#d2d2d2] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]"> 12+ Packages</p> */}

            </div>
        </div>
    )
}


const SearchTabDesktop = () => {
    const { openSearchDesk, setOpenSearch } = useContext(MyContext) as myContext;


    const [places, setPlaces] = useState<any>([])

    useEffect(() => {
        async function getPlaces() {
            await axiosInstance.get('/popularplaces')
                .then(res => {
                    setPlaces(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }

        getPlaces()



    }, [])
    const [showLocations, setShowLocations] = useState(false)
    const [locations, setLocations] = useState<Location[]>([])
    const [search, setSearch] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const debouncedSearch = useDebounce(search, 500)


    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const data = await axiosInstance.get(`/packagelocations?location=${debouncedSearch}`)
                .then(res => {setLocations(res.data)
                    setLoading(false)})
                .catch(err=> {console.log(err)
                    setLoading(false)})

            
        }
        if (debouncedSearch) fetchData()

    },[debouncedSearch])
    const handleSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setLocations([])
            setShowLocations(false);
          } else {
            setShowLocations(true);
          }
        setSearch(e.target.value);
      };

    return (
        <>{
            openSearchDesk &&
            <div className="bg-[#00000063] fixed top-0 left-0 right-0 bottom-0 z-[1000000000]">

                <div className="bg-[white] flex flex-col justify-start items-start  relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%] min-h-[80%] h-[80%] rounded-[10px] py-8 px-8">


                    <div className="w-[100%] flex flex-col items-center  bg-[white] px-4 ">
                        <div className="flex gap-2 items-center w-[100%]  relative border rounded-full px-8 py-2">
                            <img src="/images/icons/loc.svg" alt="" className="w-6" />
                            <input type="text" placeholder="Search destination"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetSearch(e)} 
                                // onClick={(e)=>setShowLocations(true)} 
                                className="outline-none text-sm 2xl:text-lg flex-grow " />
                            <img src="/images/icons/close.png" alt="" className="w-6 cursor-pointer" onClick={() => setOpenSearch(false)} />



                        </div>
                        <div className=" ">
                        {showLocations && locations.length >0 && <div  className="relative top-0 mx-8 my-2 z-[1000000]   rounded ">
                        
                        
                        <ul className="flex flex-col ">
                        
                        {locations.map((item:any,index)=> (
                            <Link href={`/explore/${item.location}`} key={index}>
                            {/* <li key={index} className="px-4 py-1 cursor-pointer rounded hover:bg-[#e5e5e5] w-[100%]">
                                <div className="flex items-center gap-4 text-sm W-[100%] my-2">
                                    <img src={item.img} alt="" className="w-[10%]"/>
                                <span>
                                {item.location.charAt(0).toUpperCase()+ item.location.slice(1)}
                                    </span>

                                </div>
                                
                                
                                </li> */}
                                <Place itm={item}/>
                            
                            </Link>
                        ))}
                    
                    </ul>
    
                        </div>}

                        </div>
                    </div>




                    <div className="px-8 mt-12 overflow-auto no-scrollbar">
                        <div>
                            <span className="roboto-bold text-xl">Popular Places</span>
                            <p className="open-sans-400 text-sm mt-2">Explore popular places with our curated tours, discovering their beauty and charm firsthand.</p>

                            <div>

                                <div className="flex justify-start flex-wrap gap-[1.2%] mt-8  ">
                                    {places && places.map((itm: any, i: any) => (
                                        <Link key={i} href={`/explore/${itm.name}`} className={`w-[19%] mb-8 ${i > 5 ? "hidden md:block" : ""}`}>
                                            <div  >
                                                <Place itm={itm} />
                                            </div></Link>
                                    ))}



                                </div>
                            </div></div>
                    </div>





                </div>


            </div>}</>
    )
}

export default SearchTabDesktop