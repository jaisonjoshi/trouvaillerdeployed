import React from 'react'

const FAQ = () => {
    return (
        <div>
            {/* FAQ Q&A */}
            <details className='border border-graydust-normal mt-3 p-5 rounded-md hover:shadow-graydust-normal hover:shadow-md hover:transition-all'>
                <summary>
                    {/* question */}
                    <span className='pl-3'>
                    How does the bidding process work?
                    </span>
                </summary>
                <div>
                    {/* answer */}
                    <p className='pt-6 text-justify'>
                    Users can place a bid on their desired hotel or tour package through the company's website. The company then compares the bid with the current market price and informs the user if their bid has been accepted or not.
                    </p>
                </div>
            </details>
            {/* FAQ Q&A */}
            <details className='border border-graydust-normal mt-3 p-5 rounded-md hover:shadow-graydust-normal hover:shadow-md hover:transition-all'>
                <summary>
                    {/* question */}
                    <span className='pl-3'>
                    Is bidding a guaranteed way to get the hotel or tour package I want?
                    </span>
                </summary>
                <div>
                    {/* answer */}
                    <p className='pt-6 text-justify'>
                    No, bidding is not a guaranteed way to get the hotel or tour package. It is dependent on the current market price and the competitiveness of other bids.
                    </p>
                </div>
            </details>
            {/* FAQ Q&A */}
            <details className='border border-graydust-normal mt-3 p-5 rounded-md hover:shadow-graydust-normal hover:shadow-md hover:transition-all'>
                <summary>
                    {/* question */}
                    <span className='pl-3'>
                    How do I know if my bid has been accepted?
                    </span>
                </summary>
                <div>
                    {/* answer */}
                    <p className='pt-6 text-justify'>
                    The company will notify the user via email or through their account on the company's website if their bid has been accepted.
                    </p>
                </div>
            </details>
            {/* FAQ Q&A */}
            <details className='border border-graydust-normal mt-3 p-5 rounded-md hover:shadow-graydust-normal hover:shadow-md hover:transition-all'>
                <summary>
                    {/* question */}
                    <span className='pl-3'>
                    Can I change my bid after I have submitted it?
                    </span>
                </summary>
                <div>
                    {/* answer */}
                    <p className='pt-6 text-justify'>
                    Yes, users can change their bid by submitting a new bid with the updated amount.
                    </p>
                </div>
            </details>
            {/* FAQ Q&A */}
            <details className='border border-graydust-normal mt-3 p-5 rounded-md hover:shadow-graydust-normal hover:shadow-md hover:transition-all'>
                <summary>
                    {/* question */}
                    <span className='pl-3'>
                    Is bidding a cost-effective way to book a hotel or tour package?
                    </span>
                </summary>
                <div>
                    {/* answer */}
                    <p className='pt-6 text-justify'>
                    Bidding can potentially result in a lower cost for the hotel or tour package, but it is not guaranteed and will depend on the current market price and the competitiveness of other bids.  
                    </p>
                </div>
            </details>
            {/* FAQ Q&A */}
            <details className='border border-graydust-normal mt-3 p-5 rounded-md hover:shadow-graydust-normal hover:shadow-md hover:transition-all'>
                <summary>
                    {/* question */}
                    <span className='pl-3'>
                    What happens if my bid is not accepted?
                    </span>
                </summary>
                <div>
                    {/* answer */}
                    <p className='pt-6 text-justify'>
                    If the user's bid is not accepted, they can try bidding again or look into other booking options provided by the company.
                    </p>
                </div>
            </details>
            {/* FAQ Q&A */}
            <details className='border border-graydust-normal mt-3 p-5 rounded-md hover:shadow-graydust-normal hover:shadow-md hover:transition-all'>
                <summary>
                    {/* question */}
                    <span className='pl-3'>
                    Are there any additional fees associated with bidding?
                    </span>
                </summary>
                <div>
                    {/* answer */}
                    <p className='pt-6 text-justify'>
                    No, bidding is free and there are no additional fees associated with it. The only cost is the cost of the hotel or tour package if the bid is accepted.
                    </p>
                </div>
            </details>
        </div>
    )
}

export default FAQ