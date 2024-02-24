
import { CategoryContainer } from '@/components/common/CategoryContainer'
import ClickToChat from '@/components/common/ClickToChat'
import { Footer } from '@/components/common/Footer'

import { InterestForm } from '@/components/common/InterestForm'
import { Review } from '@/components/common/Review'
import { TrendingDestinations } from '@/components/common/TrendingDestinations'
import { BidCard } from '@/components/common/cards/BidCard'
import { EmiDetails } from '@/components/common/cards/EmiDetails'
import { PopularPlaces } from '@/components/common/cards/PopularPlaces'
import { TravelSubscription } from '@/components/common/cards/TravelSubscription'
import { Header } from '@/components/homePage/Header'
import { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Trouvailler - Discover Your Next Adventure With Us',
  description: 'Explore the best travel plans with Trouvailler. Plan your next adventure with ease and discover amazing destinations.',
}

export default function Home() {

  
  
  return (
    <>
    <head>



    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta name="robots" content="index, follow" />

    </head>
    <body>
    <div id='bodycon'>
      <ClickToChat />
      <Header />
      <div className='mt-8 xs:mt-12 xl:mt-20 2xl:mt-12 px-4 xs:px-8 lg:px-20 xl:px-40 2xl:px-60'>
      <TrendingDestinations />
       <BidCard />

<CategoryContainer />
     <div className='my-8 xs:my-12 xl:my-20 2xl:my-16 '>
      <TravelSubscription />
      </div>
      <EmiDetails />
     <div className='my-8 xs:my-12 xl:my-20 2xl:my-20'><PopularPlaces /></div>
        <InterestForm />
      <div className='my-8 xs:my-12 xl:my-20 2xl:my-40  '>
        <Review />
      </div>
      </div>
      <Footer />
     
      
    </div>
    </body></>
  )
}
