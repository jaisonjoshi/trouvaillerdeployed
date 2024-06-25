import Link from "../../../node_modules/next/link"


const ClickToChat = () => {
    return (
        <Link href="https://wa.me/918129177335 " className=" hidden md:block fixed z-[167890987654456] bg-[#1a9c65] rounded-t-[10px] right-0 transform  -rotate-90 origin-bottom-right	 py-2 px-4  top-[50%] translate-y-[-200%]   cursor-pointer shadow-custom3">
            <div className=" flex items-center justify-center gap-2 ">
                <img src="/images/icons/wa.png" className="w-8 md:w-8"/>
                <h1 className="font-bold text-sm md:text-lg text-[white]  ">Chat with Us</h1>
            </div>
        </Link>
    )
}

export default ClickToChat