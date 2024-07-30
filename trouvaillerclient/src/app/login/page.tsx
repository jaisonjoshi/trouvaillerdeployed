import { LoginComponent } from "@/components/common/Login";
import Link from "next/link";



export default function Login () {

    return(
        <div className="flex w-[100vw] btn-grad h-[100vh] relative justify-center items-center">
             <div className='flex items-center gap-2 absolute top-8 left-20 justify-center mb-4 hidden md:flex'>
                <img src="/images/logos/icon.png" alt=""  className='w-8'/>
                <img src="/images/logos/logo.png" alt="" className='w-20'/>

            </div>
                    <LoginComponent />
                    <div className='flex gap-6 justify-center w-full text-xs text-[white] absolute bottom-4  hidden md:flex'>
            <span>@Trouvailler</span>
           <Link href="/" className="hover:underline">Terms and conditions</Link>

            <Link href="/" className="hover:underline">Privacy policy</Link>
           </div>
         
        </div>
    )
}