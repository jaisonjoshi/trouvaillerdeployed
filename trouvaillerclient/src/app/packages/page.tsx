import { CategorySection } from "@/components/PackagePage/CategorySection"
import { International } from "@/components/PackagePage/International"
import { PackagesPageHeader } from "@/components/PackagePage/PackagesPageHeader"
import { Footer } from "@/components/common/Footer"
import { Review } from "@/components/common/Review"
import { TrendingDestinations } from "@/components/common/TrendingDestinations"
import { TrendingDestinationsCarousel } from "@/components/common/TrendingDestinationsCarousel"
import { PopularPlaces } from "@/components/common/cards/PopularPlaces"
import { TravelSubscription } from "@/components/common/cards/TravelSubscription"
import { CategoryContainer } from "@/components/common/CategoryContainer"
import { InterestForm } from "@/components/common/InterestForm"
import { EmiDetails } from "@/components/common/cards/EmiDetails"



const Packages = () => {
    return(
        <div id="bodycon">
            <PackagesPageHeader />
            <div className='my-8 xs:mt-12 xl:mt-20 2xl:mt-16 px-4 xs:px-8 lg:px-20 xl:px-40'>
            <TrendingDestinations />
                <PopularPlaces />
               
                <div className="my-8">
                <International />
                <CategoryContainer />
                <CategorySection />

                </div>
                <div className='my-8 xs:my-12 xl:my-20 2xl:my-28 '>

                </div>
                </div>
                <div className='py-8 xs:py-12 xl:py-8  px-4 xs:px-8 lg:px-20 xl:px-40'>
      <TravelSubscription />
      </div>
      <div className='my-8 xs:my-12 xl:my-20  bg-[#f5f5f5] px-4 xs:px-8 lg:px-20 xl:px-40'><EmiDetails /></div>

      
      
      <div>
                <div className='my-8 xs:my-12 xl:my-20 2xl:my-28  px-4 xs:px-8 lg:px-20 xl:px-40'>

                <Review />

                </div>

                <div className='px-4 mb-20 xs:px-8 lg:px-20 xl:px-40'>
     <InterestForm />

      </div>




            </div>
            <Footer />
            
        </div>
    )
}


export default Packages