import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import HeroSection from '../../HeroSection/HeroSection'
import slid1 from './slid1.jpg'
import slid2 from './slid2.jpg'
import './SimpleSlid.css'

const SimpleSlid = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className='simple-slid-container'>
            <Slider {...settings}>
                <div>
                    <img src={slid1} alt="" className='simple-slid-img'/>
                </div>
                <div>
                <img src={slid2} alt="" className='simple-slid-img'/>
                </div>
            </Slider>
        </div>
    )
}

export default SimpleSlid
