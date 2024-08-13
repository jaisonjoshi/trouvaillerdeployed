import { BidCard } from "@/components/BidCard";
import { EmiDetails } from "@/components/EmiDetails";
import PopularPlaces from "@/components/PopularPlaces";
import { TravelSubscription } from "@/components/TravelSubscription";
import { TrendingDestinations } from "@/components/TrendingDestinations";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import CallBack from "@/components/CallBack";
import { Review } from "@/components/Review";
import { Footer } from "@/components/Footer";

export default function Home() {


  const script = `
  if (typeof window !== 'undefined') {
      window.addEventListener('scroll', function() {
          var scrollTop = window.scrollY;
          var newHeight = Math.min(350 - scrollTop, 350); // Adjust these values as needed
          document.getElementById('fixedDiv').style.height = newHeight + 'px';
      });
  }

  const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");
    if (elementsToFadeInUpOnScroll) {
      window.addEventListener("scroll", function(event) {
        elementsToFadeInUpOnScroll.forEach(function(element) {
          if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
            element.classList.add("fade-in-up");
          } else {
            element.classList.remove("fade-in-up");
          }
        });
      });
    }

`;

  
  return (
    <main className=" min-h-screen bg-[#f1f1f1] relative">
      
      <div className="relative pb-8 rounded-br-[40px] h-[350px] overflow-hidden ">
        <div id="fixedDiv" className={`overflow-hidden rounded-br-[40px] fixed h-[350px] top-0  w-full `}>
        <img src="/images/headerbg.webp" alt="" className="object-cover rounded-br-[40px] w-full  h-full  " />
        <div className='image-cover z-100'>

</div>
        </div>
        
<div>
  <div>

  </div>
</div>


        <div className="relative z-10">
        <div className="flex justify-between items-center px-4 py-4">
          <img src="/images/logos/logo.png" alt="" className="w-24" />
          <div className="text-[white]">
            <button className="btn glass rounded-[20px] text-white">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
            </button>
          </div>
        </div>
        <div className="px-4 pt-20 pb-2">
        <h1 className="text-white text-2xl font-extrabold fadein"> <span className="text-lg">Where Do You </span><br /> <span className="text-3xl">Want To Go ?</span></h1>
        



        <div className="bg-[white] fadein  mt-6 shad py-1 rounded-full flex gap-3  px-4 mr-12 items-center ">
            <IoSearch style={{fontSize:22, color:"#26389d"}}/><input type="text" className="outline-none grow text-sm py-2" placeholder="Search destination" />
          </div>
         
       
        </div>
        </div>
      </div>

     
      
          

<div className="bg-[#f1f1f1] relative z-[101] fadein">
<h2 className='text-lg font-bold text-[#2a2a2a] pl-4 pt-4'>Explore</h2>




  <div className="flex justify-between mt-4 px-4  relative z-10 items-center  ">



<div className="  rounded-[10px] flex flex-col bg-[white] shad  justify-center px-6 items-center h-[110px]">
<div className="h-12 w-12 flex justify-center bg-[#445098] rounded-full items-center">
  <img src="/images/icons/packages.svg" className="w-[60%]" alt="travel packages" />
  </div>
  <div className="flex flex-col items-center mt-2 text-[#2a2a2a]">
  <span className="text-[10px] font-regular ">Travel</span><span className="text-[12px] -mt-[5px] font-medium">Packages</span>
  </div>
</div>


<div className="  rounded-[10px] flex flex-col bg-white shad px-6 justify-center items-center h-[110px]">
<div className="h-12 w-12 flex justify-center bg-[#445098] rounded-full items-center">
  <img src="/images/icons/hotels.svg" className="w-[70%]" alt="travel packages" />
  </div>
  <div className="flex flex-col items-center mt-2 text-[#2a2a2a]">
  <span className="text-[10px] font-regular ">Hotels &</span><span className="text-[12px] -mt-[5px] font-medium">Homestays</span>
  </div>
</div>



<div className="  rounded-[10px] flex flex-col px-6 bg-white shad  justify-center items-center h-[110px]">
<div className="h-12 w-12 flex justify-center bg-[#445098] rounded-full items-center">
<FaWallet  color="#fff" size={'50%'}/>          </div>
  <div className="flex flex-col items-center mt-2 text-[#2a2a2a]">
  <span className="text-[10px] font-regular ">Bid </span><span className="text-[12px] -mt-[5px] font-medium">for Today</span>
  </div>
</div>









</div> 
</div>



<div className=" pb-4"> 
<TrendingDestinations />
</div>

<div className=" pb-4">
<PopularPlaces />

</div>


    
 
<div className="px-4  pb-8 opacity-0 fade-in-up-on-scroll"> 
  <BidCard />
</div>

<div className="pb-4 opacity-0 fade-in-up-on-scroll">
  <TravelSubscription />
</div>
      
<div className="px-4 mt-4 pb-8 opacity-0 fade-in-up-on-scroll">
  <EmiDetails />
</div>
      
<div className="px-4 mt-4 opacity-0 fade-in-up-on-scroll">
  <CallBack />
</div>

<div className="px-4 mt-4 opacity-0 fade-in-up-on-scroll">
  <Review />
</div>

    
      <Footer />
      <script dangerouslySetInnerHTML={{ __html: script }} />
   
    </main>
  );
}
