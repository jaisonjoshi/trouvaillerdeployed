import { Navbar } from "@/components/Navbar"
import { CommonCategoryContainer } from "@/components/common/CommonCategoryContainer";
import { Footer } from "@/components/common/Footer"
import { InterestForm } from "@/components/common/InterestForm";

async function getData(id: string) {
    try {
      const res = await fetch(`https://api2.trouvailler.com/api/packagelocations/${id}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      return data;
    } catch (error :any) {
      console.error("Fetch error:", error.message);
      throw error; // Rethrow the error for further handling
    }
  }
  







export default async function Page({ params }: { params: { destination: string } }) {

    const data = await getData(params.destination)

    const allPackages = {
        title:`All ${data.location.charAt(0).toUpperCase() + data.location.slice(1)} Packages`,
        description: `Grab our top selling packages for ${data.location.charAt(0).toUpperCase() + data.location.slice(1)} at Unbelievable prices.`,
        url:`/package?locationtag=${data.location}`
    }
  
    
    return(
        <div className="relative" id="bodycon">
            <div>
            <div className="relative">
            <div className="absolute  top-0 left-0 right-0 bottom-0 min-h-[200px]">
                <img src={data.img} alt="" className="object-cover  object-bottom lg:object-center w-full h-full" />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 gradient-3 min-h-[200px]">

            </div>

            <div className="py-4">
            <Navbar />
            </div>

            <div className="text-white sticky top-0 px-4 md:px-28 mt-16  md:pt-32">
                <h1 className="text-3xl font-bold lg:pb-12  ">{data.location.charAt(0).toUpperCase() + data.location.slice(1)}</h1>
            </div>
            
        </div>
            </div>

            <div className="px-4 xs:px-8 lg:px-20 xl:px-40 mt-20">
         <CommonCategoryContainer data={allPackages}/>

            </div>

           <div className="px-4 xs:px-8 lg:px-20 xl:px-40  mb-20 py-8">
           <InterestForm />
           </div>
         
           
           
      <Footer />
        </div>
    )
}

