import logo from '../assets/logo.png'

const Footer =() =>{
    return(
        <div className="gradientbg lg:ml-[200px] flex  gap-4 justify-center py-12 items-end">
                <img src={logo} className='w-[100px]'/> <span className='text-[14px] mb-[-3px] text-[white]'>Enterprises Pvt Ltd.</span>
        </div>
    )
}

export default Footer