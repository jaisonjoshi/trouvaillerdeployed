import { CategorySection } from "@/components/PackagePage/CategorySection"
import { International } from "@/components/PackagePage/International"
import { PackagesPageHeader } from "@/components/PackagePage/PackagesPageHeader"
import { Footer } from "@/components/common/Footer"
import { Review } from "@/components/common/Review"
import { TrendingDestinations } from "@/components/common/TrendingDestinations"
import { TrendingDestinationsCarousel } from "@/components/common/TrendingDestinationsCarousel"
import { PopularPlaces } from "@/components/common/cards/PopularPlaces"
import { TravelSubscription } from "@/components/common/cards/TravelSubscription"



const Packages = () => {
    return(
        <div id="bodycon">
            <PackagesPageHeader />
            <div className='my-8 xs:mt-12 xl:mt-20 2xl:mt-16 px-4 xs:px-8 lg:px-20 xl:px-40 2xl:px-60'>
                <PopularPlaces />
                <div className='my-8 xs:my-12 xl:my-20 2xl:my-28 '>

                <TrendingDestinationsCarousel />
                </div>
                <International />
                <div className='my-8 xs:my-12 xl:my-20 2xl:my-28 '>

                <CategorySection />
                </div>
                <TravelSubscription />
                <div className='my-8 xs:my-12 xl:my-20 2xl:my-28 '>

                <Review />

                </div>






            </div>
            <Footer />
            
        </div>
    )
}


export default Packages