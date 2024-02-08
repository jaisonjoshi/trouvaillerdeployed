import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/common/Footer"

async function getData(id :string) {
    const res = await fetch(`https://api2.trouvailler.com/api/packagelocations/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
      }

    
     
      return res.json()

    
}







export default async function Page({ params }: { params: { destination: string } }) {

    const data = await getData(params.destination)
   console.log(data)
    
    return(
        <div className="relative" id="containerfilter">
            <div>
            <div className="relative">
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <img src={data.img} alt="" className="object-cover  object-bottom w-full h-full" />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 gradient">

            </div>

            <div className="py-4">
            <Navbar />
            </div>

            <div className="text-white sticky top-0 px-4 md:px-28  py-8 md:pt-32">
                <h1 className="text-3xl font-bold poppins">{data.location.charAt(0).toUpperCase() + data.location.slice(1)}</h1>
            </div>
            
        </div>
            </div>
         
           
           
      <Footer />
        </div>
    )
}

