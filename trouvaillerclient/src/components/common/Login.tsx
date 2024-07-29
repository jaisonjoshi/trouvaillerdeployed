'use client'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/plain.css'
import { myContext, MyContext } from '../context/Context'

export const LoginComponent = () => {
    const { linkHistoryItem } = useContext(MyContext) as myContext;

    const router = useRouter()
    const session = useSession()
    if(session && session.status == "authenticated"){
        router.push(linkHistoryItem )
    }
    const [value, setValue] = useState<any>(undefined)
    const handleSignin = async  () => {
        console.log(linkHistoryItem)
        await signIn('google', {callbackUrl : linkHistoryItem});
    }
    return (
        <div className="bg-[white] w-[70vw] relative flex card-shadow-1 max-h-[70vh] rounded-[10px] overflow-hidden">
        <div className="w-[60%]">
             <img src="images/loginimg.jpg" alt="" className="object-cover w-[100%] h-[100%]"/>
         </div>
         <div className="w-[40%] text-center flex flex-col justify-center">
           <div className='w-[300px] mx-auto'>
           
           <h1 className="roboto-bold text-2xl">Welcome Back</h1>
             <div className='w-full mx-auto mt-8 flex flex-col items-center'>
                 <span className='text-sm'>Sign in via mobile</span>
                <div className='mt-4'>
                <PhoneInput
   placeholder="Enter phone number"
   value={value}
   country="in"
//    disableInitialCountryGuess={true}
//    disableCountryGuess={true}
   onChange={setValue}/>
                </div>
                <button className='btn-grad text-[white] roboto-bold text-sm w-full mt-4 py-2 rounded'>Send OTP</button>
             </div>
             <p className='my-6'>Or</p>
             <button className='border border-[#d8d8d8] rounded w-[300px]  text-sm flex gap-4 items-center justify-center py-2' onClick={handleSignin} ><img src="images/icons/google.png" className='w-5' /><span>Sign in with Google</span></button>
           </div>
          
         </div>
        </div>
    )
}