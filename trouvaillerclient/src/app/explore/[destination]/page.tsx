import { Navbar } from "@/components/Navbar"
import { CommonCategoryContainer } from "@/components/common/CommonCategoryContainer";
import { Footer } from "@/components/common/Footer"
import { InterestForm } from "@/components/common/InterestForm";
import SearchBar from "@/components/common/SearchBar";

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
// const data = {
//   "_id": "65c3b258fab5a9e95614de6e",
//   "location": "thailand",
//   "img": "http://res.cloudinary.com/difxlqrlc/image/upload/v1707323992/upload/zho8m5bnsshb55gogbni.jpg",
//   "__v": 0
// }
    const allPackages = {
        title:``,
        description:"",
        url:`/package?locationtag=${data.location}`
    }
  
    
    return(
        <div className="relative" id="bodycon">
           

            <div className="bg-[#F3F3F3] py-4 ">
                <Navbar darkMode={true}/>
            </div>
            <div className="hidden md:block">
                <SearchBar />
            </div>
            <div>
            <div className="relative">
            <div className="absolute  top-0 left-0 right-0 bottom-0 min-h-[200px]">
                <img src={data.img} alt="" className="object-cover  object-bottom lg:object-center w-full h-full" />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 gradient-3 min-h-[200px]">

            </div>
            <div className="text-white sticky top-0 px-4 md:px-40  md:pt-32">
                <h1 className="text-3xl roboto-bold lg:pb-3  ">All {data.location.charAt(0).toUpperCase() + data.location.slice(1)} Travel Packages</h1>
                <p className="pb-8 roboto-regular">Grab our top selling packages for {data.location.charAt(0).toUpperCase() + data.location.slice(1)} at Unbelievable prices</p>
            </div>
            
        </div>
            </div>

            <div className="px-4 xs:px-8 lg:px-20 xl:px-40 mt-8">
         <CommonCategoryContainer data={allPackages}/>

            </div>

           <div className="px-4 xs:px-8 lg:px-20 xl:px-40  mb-20 py-4">
           <InterestForm />
           </div>
         
           
           
      <Footer />
        </div>
    )
}

