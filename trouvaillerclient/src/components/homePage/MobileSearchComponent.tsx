"use client"

import { ChangeEvent, useEffect, useState } from "react"
import { Navbar } from "../Navbar"
import useDebounce from "@/hooks/useDebounce"
import axiosInstance from "../../../axiosInstance"
import { ImageDarker } from "@/utils/ImageDarker"
import Link from "next/link"



export const MobileSearchComponent: React.FC<{ setOpenSearchComponentMobile: any }> = ({ setOpenSearchComponentMobile }) => {
    const [search, setSearch] = useState<string | null>(null)
    const debouncedSearch = useDebounce(search, 500)
    const [locations, setLocations] = useState<Location[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [bodyHeight, setBodyHeight] = useState<Number>()


    
    const [places, setPlaces] = useState<any>([])

    useEffect(()=>{
        async function getPlaces() {
            await axiosInstance.get('/popularplaces')
                .then(res => {
                    setPlaces(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
            }

            getPlaces()



    },[])

    useEffect(()=>{


        setBodyHeight(document.documentElement.clientHeight)
        console.log("hello")


    },[])
    useEffect(()=>{
        const objg = document.getElementById('bodycon');

        if( objg !== null){

            objg.style.maxHeight = bodyHeight+'px'
            objg.style.overflow = 'hidden'
            objg.style.height=bodyHeight+'px'

        }
    })

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const data = await axiosInstance.get(`/packagelocations?location=${debouncedSearch}`)
                .then(res => {
                    setLocations(res.data)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setLoading(false)
                })


        }
        if (debouncedSearch) fetchData()

    }, [debouncedSearch])
    const handleSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            setLocations([])
            setOpenSearchComponentMobile(false);
        } else {
            setOpenSearchComponentMobile(true);
        }
        setSearch(e.target.value);
    };
    const closeMobileSearchComponent = () => {
        setOpenSearchComponentMobile(false)
        const objg = document.getElementById('bodycon');

        if( objg !== null){
            objg.style.maxHeight = 'auto'
            objg.style.overflow = 'auto'
            objg.style.height="auto"

        }
    }
    return (
        <div className="">


            <div className="w-[100vw] h-[100vh]  bg-[white] absolute overflow-scroll  top-[1px] left-0 right-0  z-[10000000000000000000]">
                <div className="">
                    <div className="  w-full z-[1000] py-4 sm:py-8">

                        <Navbar darkMode={true} />
                    </div>



                    <div className="">

                        <div>

                            <div className="flex items-center justify-start py-4 px-4" >
                                <img src="images/icons/back.jpg" alt="" className="w-6" onClick={closeMobileSearchComponent}/>
                                <div className="ml-4 grow">
                                    <input type="text" placeholder="Search Destinations" onChange={(e: ChangeEvent<HTMLInputElement>) => handleSetSearch(e)} className="border border-[#444444] px-2 py-2 outline-none rounded w-full" />
                                </div>


                            </div>


                        </div>








                    </div></div>

                   <div className="">
                   <div className="px-4 py-4 ">
                    {
                        locations && locations.map((item : any,index)=>(
                            <Link key={index} className="mb-2" href={`/explore/${item.location}`}>
                            <div  className="flex items-center  gap-[5%] bg-[#efefef] rounded overflow-hidden" >
                                <img src={item.img} alt="" className="w-[25%] "/>
                                <h1 className="font-medium">{item.location.charAt(0).toUpperCase() + item.location.slice(1)}</h1>
                            </div>
                            </Link>
                        ))
                    }

                    </div>

                   







                    <div className="px-4 mt-4">
                        <h1 className="text-lg">Popular Destinations</h1>

                        <div className="flex flex-wrap gap-[3.33%] justify-start mt-4">
                            {places && places.slice(0,6).map((item:any,index:any)=>(
                                <div key={index} className="min-h-[130px] w-[30%] xs:min-h-[250px] relative  flex items-end">
                                <div className="absolute top-0 left-0 bottom-0 right-0">
                                <ImageDarker />
            
                                <img src={item.image} alt="" className="w-full h-full rounded-[10px] object-cover object-bottom"/>
                                </div>
                                <div className="relative px-2 xs:px-4 mb-4 xs:mb-8 z-10">
                                    <h1 className="font-bold text-[white] text-[16px] sm:text-[20px] lg:text-[24px]">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h1>
                                    {/* <p className="font-medium text-[#d2d2d2] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]"> 12+ Packages</p> */}
            
                                </div>
                            </div>
                            ))

                            }
                        </div>
                    </div>
                   </div>
                
            </div>
        </div>
    )
}