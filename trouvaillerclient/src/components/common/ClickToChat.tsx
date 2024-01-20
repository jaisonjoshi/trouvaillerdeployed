import Link from "next/link"


const ClickToChat = () => {
    return (
        <Link href="https://wa.me/918129177335 " className=" fixed z-[167890987654456] bg-[#25d366] pl-4 pr-8 py-2 rounded-full animate-bounce overflow-hidden bottom-8 md:bottom-24 right-4 md:right-8 cursor-pointer shadow-custom3">
            <div className=" flex items-center justify-center gap-2 ">
                <img src="images/icons/wagreen.png" className="w-8 md:w-12"/>
                <h1 className="font-bold text-sm md:text-lg text-[white] ">Chat with Us</h1>
            </div>
        </Link>
    )
}

export default ClickToChat