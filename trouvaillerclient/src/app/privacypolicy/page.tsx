import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/common/Footer';
import React from 'react';


const PrivacyPolicy = () => {
    return (
        <div>
             <div className="bg-[#F3F3F3] py-4 ">
                <Navbar darkMode={true}/>
            </div>
            <div className='mx-10 sm:mx-10 lg:mx-44 mt-24 mb-24 text-blacky-light'>
                <h1 className='text-2xl font-bold'> Privacy Policy for Trouvailler, an Online Travel Aggregator
</h1> 

                <p className='text-blacky-bright font-light'> Last Updated: February 8, 2023
</p> <br />

               <h2 className='text-base font-semibold'>Introduction</h2> 
                <p>At Trouvailler, we understand the importance of protecting the privacy of our users. This Privacy Policy outlines the types of information we collect, how it is used, and the steps we take to ensure that your personal information is secure.
                </p><br />
                <h2 className='text-base font-semibold'>Information We Collect</h2>
                <p>Personal Information: When you create an account with us, we collect personal information such as your name, email address, and telephone number.</p>
                <p>Payment Information: If you make a reservation or purchase through our website, we will collect payment information such as your credit card number, expiration date, and security code.</p>
                <p>Location Information: We may collect information about your location in order to provide you with the most relevant information and offers.</p>
                <p>Usage Information: We collect information about how you use our website and services, including search queries, page views, and the pages and features you access.</p>
                <br />
                <h2 className='text-base font-semibold'>Use of Collected Information
</h2>
                <p>To provide our services: We use the information we collect to provide and improve our services, such as processing and fulfilling your reservations, and communicating with you about your account and purchases.
                </p>
                <p>To send promotional communications: We may use your personal information to send you promotional communications about our company and its partners, unless you have opted out of receiving such communications.

</p>
<p>To improve our website: We use usage information to understand how our users interact with our website and services, and to make improvements and changes accordingly.</p>
<p>To comply with legal obligations: We may use or disclose your personal information if required to do so by law or if we believe in good faith that such action is necessary to comply with a legal obligation.
</p>

<br />
                <h2 className='text-base font-semibold'>Security of Personal Information
</h2>

<p>We take appropriate security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information. These measures include internal reviews of our data collection, storage and processing practices and security measures, as well as physical security measures to guard against unauthorized access to our systems.                </p><br />
                <h2 className='text-base font-semibold'>Third-Party Service Providers
</h2><p>We may share your personal information with third-party service providers who perform services on our behalf, such as processing payments and providing customer service. These service providers are only allowed to use your personal information in accordance with our instructions and are obligated to maintain the confidentiality of your information.


                </p><br />
                <h2 className='text-base font-semibold'>Changes to This Privacy Policy
</h2>

<p>We may update this Privacy Policy from time to time, and we will notify you of any changes by posting the updated policy on our website. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.                </p><br />
                <h2 className='text-base font-semibold'>Contact Us
</h2>
<p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:suppory@trouvailler.com" className='underline text-[blue]'>suppory@trouvailler.com</a>  or +91 8129177335, +91 8075404343, +91 8891483310
                </p><br />

                
            </div>
            <Footer />
        </div>
    )
}
export default PrivacyPolicy
