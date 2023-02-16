import React from "react";

const OfferCard=({item})=>{
    return(
        <div key={item._id}>
        <div class='text-xl font-bold text-blacky-medium'><h1>{item.title}</h1></div> 
<div className="package-card-img">
    <img src={require('../../Assets/SpecialOffer.png')} alt="Avatar"/>
</div>
<div className='text-sm md:text-[17px]  text-blacky-light card-text'>

    <p>{item.description}</p>
   

</div>
<div className="package-card-footer">

<h3 className='text-evergreen text-xl font-bold'>₹{item.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
</h3> 
<br></br>
</div></div>
    )
}

export default OfferCard



