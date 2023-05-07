
import emi from '../../Assets/emi.png'

const Emi = () => {
    return(
<div className='flex items-center'>
    <div className='w-[60%] flex justify-center'>
    <div className='w-[70%]'>
    <h1 className='text-5xl mb-12 font-bold'>Travel now Pay Later</h1>
    <h1 className='text-lg textnormal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sequi inventore eveniet eum accusamus alias asperiores maiores voluptatem magni, voluptates accusantium ea laudantium rem explicabo incidunt ad enim minus sunt?</h1>
<button className='text-lg mt-8 px-4 py-2 bg-[#00ffa7] rounded text-white font-semibold'>Know more</button>
    </div>
    </div>
    <div className='w-[40%]'> 
    <img src={emi} alt="" />
    </div>
</div>
        )
}


export default Emi