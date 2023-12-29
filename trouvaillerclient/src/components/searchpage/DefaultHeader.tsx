import { Navbar } from "../Navbar"


export const DefaultHeader = () => {
    return(
        <div className="relative">
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <img src="/images/loc.jpg" alt="" className="object-cover  object-bottom w-full h-full" />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 gradient">

            </div>

            <div className="py-4">
            <Navbar />
            </div>

            <div className="text-white sticky top-0 px-4 py-8">
                <h1 className="text-3xl font-bold poppins">Munnar</h1>
                <h1 className="">12 Packages</h1>
            </div>
            
        </div>
    )
}