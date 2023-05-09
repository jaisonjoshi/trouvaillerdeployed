
import { Link } from 'react-router-dom'
import emi from '../../Assets/emi.png'

const Emi = () => {
    return(
<div className='flex flex-col md:flex-row py-12 md:py-0 items-center'>
    <div className='w-[90%] md:w-[60%] flex justify-center'>
    <div className='md:w-[70%]'>
    <h1 className='text-3xl md:text-5xl mb-12 font-bold'>Travel now Pay Later</h1>
    <h1 className='text-sm md:text-lg textnormal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sequi inventore eveniet eum accusamus alias asperiores maiores voluptatem magni, voluptates accusantium ea laudantium rem explicabo incidunt ad enim minus sunt?</h1>
    <Link to="/emi"><button className='text-lg mt-8 px-4 py-2 bg-[#00ffa7] rounded text-white font-semibold'>Know more</button>
</Link>
    </div>
    </div>
    <div className='w-[100%] md:w-[40%]'> 
    <img src={emi} alt="" />
    </div>
</div>
        )
}


export default Emi