"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Profile from "./common/Profile";
import { useContext } from "react";
import { myContext, MyContext } from "../components/context/Context";



export const Navbar: React.FC<{ darkMode?: boolean, bg?: boolean }> = ({ darkMode, bg }) => {

    const location = usePathname()
    const router = useRouter()
    const session = useSession()
    const { setProfileOpen, profileOpen , setLinkHistoryItem} = useContext(MyContext) as myContext;
    console.log(session)

    const [openNavbar, setOpenNavbar] = useState(false)
    const [bodyHeight, setBodyHeight] = useState<Number>()
    useEffect(() => {
        const objg = document.getElementById('bodycon');


        setBodyHeight(document.documentElement.clientHeight)
        console.log("hello")


    }, [])

    const handleOPenNav = () => {
        const objg = document.getElementById('bodycon');

        setOpenNavbar(true)
        if (objg !== null) {

            objg.style.maxHeight = bodyHeight + 'px'
            objg.style.overflow = 'hidden'
            objg.style.height = bodyHeight + 'px'

        }



    }

    const handleCloseNav = () => {
        const objg = document.getElementById('bodycon');

        setOpenNavbar(false)
        if (objg !== null) {
            objg.style.maxHeight = 'auto'
            objg.style.overflow = 'auto'
            objg.style.height = "auto"

        }

    }

    const handleLogin = (e: any) => {
        e.preventDefault();
        console.log(location);
        setLinkHistoryItem(location)
        router.push('/login')
    }
    const profileRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                // Click occurred outside the menu, hide the menu
                setProfileOpen(false);
            }

        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (

        <div className={`flex justify-between relative z-[1000] items-center text-[white] px-4 sm:px-8 md:px-8  lg:px-20 xl:px-40 ${bg ? "!bg-[red]" : ""}`}>

            <div className="flex items-center gap-12 2xl:gap-20">
                <Link href="/">
                    <div className="flex items-center gap-2 sm:gap-4 cursor-pointer">
                        <img src="/images/logos/icon.png" alt="" className="w-8 sm:w-10 " />
                        <img src={`/images/logos/${darkMode ? "logodark.png" : "logowhite.png"}`} alt="" className="w-[70px] sm:w-[90px] xl:w-[90px]" />
                    </div></Link>

                <div className="hidden lg:block">
                    <ul className={`flex items-center gap-12 2xl:gap-16 ${darkMode ? "text-black" : ""}`}>
                        <Link href="/packages">
                            <li className="flex items-center gap-2">
                                <img src="/images/icons/beach.png" className="w-6" />
                                <div className="flex flex-col mt-1">
                                    <span className="text-[11px]">Tour</span>
                                    <span className="font-medium text-sm ">Packages</span>
                                </div>
                            </li></Link>


                        <Link href="/">
                            <li className="flex items-center gap-2">
                                <img src="/images/icons/hotels.png" className="w-6" />
                                <div className="flex flex-col mt-1">
                                    <span className="text-[11px]">Hotels</span>
                                    <span className="font-medium text-sm">Home stays</span>
                                </div>
                            </li></Link>


                        <Link href="/">
                            <li className="flex items-center gap-2">
                                <img src="/images/icons/bid.png" className="w-5" />
                                <div className="flex flex-col mt-1">
                                    <span className="text-[11px]">Bid</span>
                                    <span className="font-medium text-sm">your stay!</span>
                                </div>
                            </li></Link>
                    </ul>
                </div>
            </div>



            <div className="flex">

                {session && session.status !== "authenticated" &&
                    <div onClick={handleLogin} className="flex items-center gap-2" >
                        <img src={`/images/icons/${darkMode ? "avatardark" : "avatar"}.png`} alt="" className="w-8 hidden md:block" />
                        <div className="hidden md:flex flex-col ">
                            <span className={`text-xs roboto-medium ${darkMode ? "text-black" : "text-white"}`}>Login</span>

                            <span className="flex text-[13px] roboto-medium text-[green]">Sign Up <img src="/images/icons/arrowdown.png" className="w-6" /></span>

                        </div>
                    </div>}
                {session && session.status == "authenticated" &&
                    <div className="text-[black]  items-center gap-4 relative hidden md:flex">
                        <div className="flex items-center gap-2" onClick={() => setProfileOpen(!profileOpen)}>
                            <div className="w-10 rounded-full h-10 overflow-hidden" >
                                <img className="w-full" src={session.data.user ? session.data.user.image as string : `/images/icons/${darkMode ? "avatardark" : "avatar"}.png`} alt="" />

                            </div>
                            <div className="flex flex-col roboto-regular">
                                <span className="text-[10px]">Hello,</span>
                                <span className="flex items-end text-sm roboto-medium">{session?.data?.user?.name} <img src="/images/icons/arrowdown.png" className="w-6" /></span>
                            </div>
                        </div>

                        <div className="absolute top-[110%] right-0" ref={profileRef}>
                            <Profile />

                        </div>


                    </div>
                }
                <div className="lg:hidden">

                    {!openNavbar && <img src={`/images/icons/${darkMode ? "menudark" : "hamburger"}.png`} alt="" className="w-6 mt-2 sm:w-10 ml-8 rounded" onClick={handleOPenNav} />
                    }             {openNavbar && <img src={`/images/icons/${darkMode ? "Close" : "Close"}.png`} alt="" className="w-6 mt-2 sm:w-10 ml-8 rounded" onClick={handleCloseNav} />
                    }
                </div>
            </div>








            <div className={`fixed top-0 overflow-auto ${openNavbar ? "left-[0%]" : "left-[-100%]"}  transition-all duration-300 right-0 flex flex-col justify-between  w-[100%]  bottom-0 bg-white `}>
                <div className="w-full">

                    <div className=" relative w-full">
                        <button className="text-[white] roboto-bold z-[100000000] absolute top-4 right-4 " onClick={handleCloseNav}>X</button>
                        <div className="absolute top-0 bottom-0 left-0 right-0">
                            <img src="/images/slider/slider1.jpg" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="absolute top-0 left-0 right-0 bottom-0 gradient">

                        </div>
                        <div className="relative flex justify-center items-center gap-2 py-8">
                        <img src="/images/logos/icon.png" alt="" className="w-8 sm:w-10 " />

                            <img src="/images/logos/logo.png" alt="" className="w-20" />
                        </div>

                    </div>



                   { session && session.status !== "authenticated" && <div className="flex mx-4 items-center gap-3 mt-8  pb-4">
                        <img src="/images/icons/avatardark.png" alt="" className="w-8" />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-black" >Login</span>

                            <span className="flex text-[12px] font-medium text-[green]">Sign Up </span>

                        </div>
                    </div>}
                    {session && session.status == "authenticated" &&
                    <div className="text-[black]  items-center gap-4 relative flex  mb-4 md:hidden">
                        <div className="flex items-center gap-2 px-4 mt-8">
                            <div className="w-10 rounded-full h-10 overflow-hidden" >
                                <img className="w-full" src={session.data.user ? session.data.user.image as string : `/images/icons/${darkMode ? "avatardark" : "avatar"}.png`} alt="" />

                            </div>
                            <div className="flex flex-col roboto-regular">
                                <span className="text-[10px]">Hello,</span>
                                <span className="flex items-end text-sm roboto-medium">{session?.data?.user?.name} </span>
                            </div>
                        </div>

                       


                    </div>
                }
                                        <hr />

                    <div className="text-black px-4 mt-4">
                        <ul className="flex flex-col gap-2">
                            <Link href="/packages">
                                <li className="flex items-center gap-2">
                                    <img src="/images/icons/beach.png" className="w-8" />
                                    <div className="flex flex-col mt-1">
                                        <span className="text-[10px]">Tour</span>
                                        <span className="font-medium text-[12px] ">Packages</span>
                                    </div>
                                </li></Link>
                                <hr />


                            <Link href="/">
                                <li className="flex items-center gap-2">
                                    <img src="/images/icons/hotels.png" className="w-8" />
                                    <div className="flex flex-col mt-1">
                                        <span className="text-[10px]">Hotels</span>
                                        <span className="font-medium text-[12px]">Home stays</span>
                                    </div>
                                </li></Link>
<hr />

                            <Link href="/">
                                <li className="flex items-center gap-2">
                                    <div className="w-8 flex justify-center">
                                        <img src="/images/icons/bid.png" className="w-6" />
                                    </div>
                                    <div className="flex flex-col mt-1">
                                        <span className="text-[10px]">Bid</span>
                                        <span className="font-medium text-[12px]">your stay!</span>
                                    </div>
                                </li></Link>

                        </ul>
                    </div>

                    <div className="text-black px-4 mt-8 flex flex-col gap-3 items-start">
                        <h1 className="text-xs font-bold">Connect with Us</h1>
                        <button className="flex gap-2 items-center bg-[#1a9c65] px-4 text-xs py-1 rounded text-white font-semibold"><img src="/images/icons/wa.png" className="w-5" alt="" /> <span className="mt-[2px]">WhatsApp</span></button>
                    </div>
                </div>
                <div className=" mx-4 text-[#504f4f] mb-4 text-xs flex gap-2 flex-col">
                    <div className="flex gap-2 items-center mb-2">
                        <img src="/images/icons/fab.png" alt="" className="w-6" />
                        <img src="/images/icons/instab.png" alt="" className="w-6" />
                        <img src="/images/icons/ytb.png" alt="" className="w-6" />
                    </div>
                    <h1>Terms and Conditinos</h1>
                    <h1>Privacy Policy</h1>

                </div>
            </div>

        </div>
    )
}