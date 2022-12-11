import './header.scss'
import logo from '../../Assets/logo.png'
import Slider from "react-slick";
import profile from "../../Assets/profile.jpg";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "slick-carousel/slick/slick.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import "slick-carousel/slick/slick-theme.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';
const Header = () => {
    const settings = {
        infinite: true,
       
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 4000,
        
      };
    return(
        <div className="header">
             <Slider {...settings}>
             <div className='pic4 w-screen h-[50vh]'></div>

                <div className='pic1 w-screen h-[50vh]'></div>
                <div className='pic2 w-screen h-[50vh]'></div>
                <div className='pic3 w-screen h-[50vh]'></div>




            </Slider>
            <div className="header-content">
                <div className="header-nav">
                    <div className="prof">
                        <img src={profile} />
                        <p className='mr-4'>Jaison</p>
                    </div>
                    <div className="nav-items">
                    <Link to="/"><a href="www.trouvailler.com">Home</a></Link>

                    <span className='header-txt'>Explore <a href="www.trouvailler.com">trouvailler.com</a></span>
                   <LocalPhoneIcon className='nav-icon'/> <WhatsAppIcon className='nav-icon'/><InstagramIcon  className='nav-icon'/>
                    </div>
                </div>
                <div className='header-logo'>
                    <img src={logo} />
                    <p>
Travel takes us out of our comfort zones and inspires us to see, taste and try new things</p>
                </div>
            </div>
        </div>
    )
}


export default Header