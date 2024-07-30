'use client'

import { signOut, useSession } from "next-auth/react"
import Link from "next/link";
import { useContext } from "react";
import { myContext, MyContext } from "../context/Context";

const Profile = () => {
    const session = useSession();
    const {profileOpen} = useContext(MyContext) as myContext;
    
    return(
        <>
        {session && session.data !==null && session.data !==undefined &&  profileOpen &&
        <div className=" text-[white] roboto-regular    bg-[#00000096] card-shadow-1 py-2 px-4 rounded">
        <span className="text-[12px] ">Signed in as</span>

        <div className="flex gap-4 mt-3 mb-4">
        <div className="w-10  rounded-full h-10 overflow-hidden">
            <img className="w-full" src={session.data.user && session.data.user.image as string } alt="" />
        </div>
        <div className="flex flex-col">
            <span className="text-sm">{session.data.user &&  session.data.user.name}</span>
            <span className="text-xs">{session.data.user &&  session.data.user.email}</span>
        </div>  
        </div>
        <hr />
        <div>
        <button className="flex gap-2 items-center py-2 text-xs" onClick={()=>signOut()}>
        <span>Sign out</span>

            <img src="/images/icons/exit.png" alt="" className="w-4" />
            </button>

        </div>

        </div>}</>
    )
}

export default Profile