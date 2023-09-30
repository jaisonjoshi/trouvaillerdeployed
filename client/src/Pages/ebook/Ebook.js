import NavbarTest from "../components/navbar/navbar"
import popupimg from '../Assets/ebookb.png'
import Footer from "../components/Footer/Footer"
import ebookcirclebg from '../Assets/ebookcirclebg.png'
import ebookcover from '../Assets/ebookcover.png'
import ebookmob from '../Assets/ebookmob.webp'
import { useState } from "react"
import axios from "axios"



const Ebook = () => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      });
    
    const [ebookdetails, setEbookdetails] = useState({
        name:undefined,
        email:undefined
    })
    const handleChange = (e) => {
        console.log(ebookdetails)
        setEbookdetails((prev) => ({ ...prev, [e.target.id]: e.target.value }));

      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axiosInstance.post("/subscribe", ebookdetails);

    }

    return (
        <div>
           <div className="">

           <div className="shadow-lg md:pb-4">
                <NavbarTest/>

            </div>
            <div className="flex mb-[10rem] hidden md:flex">
                <div className="flex w-[65%] flex-col justify-center gap-4 mt-24 ">
                    <h1 className="font-extrabold ml-4 sm:ml-16 md:ml-20 2xl:ml-60 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-body text-[#222539]">DO'S AND DONT'S WHILE BOOKING A TRAVEL PACKAGE</h1>
                    <p className="ml-4 sm:ml-16 md:ml-20 2xl:ml-60 w-[80%] xl:w-[60%] text-[#595252] text-base lg:text-lg 2xl:text-xl font-body">Download our free ebook to become well informed on buying a travel package. be well informed before making a well informed decision.</p>
                    <p className="ml-4 sm:ml-16 md:ml-20 2xl:ml-60 w-[80%] xl:w-[60%] text-[#595252] text-base lg:text-lg  2xl:text-xl font-body">From research and budgeting to understanding policies and making the right choices, this eBook will equip you with the knowledge needed to navigate the process effectively.</p>

                    <form action="" className="ml-4 sm:ml-16 md:ml-20 2xl:ml-60 flex gap-4 flex-col items-start mt-8" >
                        
                        <p className="text-[#595252] text-base lg:text-lg">Enter your E-mail to download your free copy</p>
                        <input type="name" name="" onChange={handleChange} id="name" className="border border-[1px] border-[#222539] px-4 py-2 rounded" placeholder="Name"/><br></br>

                        <input type="email" name="" onChange={handleChange} id="email" className="border border-[1px] border-[#222539] px-4 py-2 rounded" placeholder="E-mail"/><br></br>
                        <input type="submit" value="Download now" onClick={handleSubmit} className="gradientbg text-[white] px-6 shadow-xl py-3 rounded-full" />
                    </form>
                </div>
                <div className="w-[50%] 2xl:w-[45%] pt-20 lg:pt-0 relative ">
                    <div className="relative z-[100000] pt-16 ">
                    <img src={ebookcover} alt="relative z-[1000] top-0" />

                    </div>
                    <img src={ebookcirclebg} className="absolute z-[100] lg:w-[90%] right-0 top-0" />

                </div>
            </div>





            <div className=" flex flex-col items-start  py-8 md:hidden">
                <span className="ml-4 sm:ml-16 md:ml-20 text-xs font-bold px-4 py-1 mb-4 rounded-full 2xl:ml-60 text-[white] gradientbg">E-book</span>
            
            <h1 className="font-extrabold ml-4 sm:ml-16 md:ml-20 2xl:ml-60 text-2xl  lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#222539]">Do's and Dont's while Booking a Travel Package</h1>
            <p className="ml-4 sm:ml-16 md:ml-20 2xl:ml-60 w-[80%] xl:w-[60%] text-[#595252] text-base my-3 lg:text-lg 2xl:text-xl font-body">Download our free ebook to become well informed on buying a travel package. be well informed before making a well informed decision.</p>

            <div className="flex justify-end">
            <img src={ebookmob} className="w-[85%]"/>
            </div>
            
            <p className="ml-4 sm:ml-16 mt-12 md:ml-20 2xl:ml-60 w-[100%] xl:w-[60%] text-[#595252] text-base lg:text-lg  2xl:text-xl font-body">From research and budgeting to understanding policies and making the right choices, this eBook will equip you with the knowledge needed to navigate the process effectively.</p>
            <form action="" className="ml-4 sm:ml-16 md:ml-20 2xl:ml-60 flex gap-4 flex-col items-start mt-8" >
                        <p className="text-[#595252] text-base lg:text-lg">Enter your E-mail to download your free copy</p>
                        <input type="email" name="" id="" className="border border-[1px] border-[#222539] px-4 py-2 rounded" placeholder="E-mail"/>
                        <input type="submit" onClick={handleSubmit} value="Download now" className="gradientbg text-[white] px-6 shadow-xl py-3 mt-4 rounded-full" />
                    </form>
            </div>
           </div>

           <Footer />
        </div>
    )
}

export default Ebook