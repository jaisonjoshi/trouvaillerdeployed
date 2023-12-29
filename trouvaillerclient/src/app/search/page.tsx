import { Footer } from "@/components/common/Footer"
import { HoneymoonDestinations } from "@/components/common/HoneymoonDestinations"
import { DefaultHeader } from "@/components/searchpage/DefaultHeader"
import { Filters } from "@/components/searchpage/FIlters"
import { TrendingDestinationsSearch } from "@/components/searchpage/TrendingDestinationsSearch"

const SearchResultPage = () => {
       
    return(
        <div className="relative" id="containerfilter">
            <div>
                <DefaultHeader />
            </div>
            <Filters />
           
            <div className='mt-8 xs:mt-12 xl:mt-20 2xl:mt-28 px-4 xs:px-8 lg:px-20 xl:px-40 2xl:px-60'>
      <TrendingDestinationsSearch />
      <div className='my-8 xs:my-12 xl:my-20 2xl:my-28'><HoneymoonDestinations /></div>
    
     
      </div>
      <Footer />
        </div>
    )
}

export default SearchResultPage