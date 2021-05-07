import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardItem from '../../cardItem/CardItem'
import './MultiSlid.css'

const MultiSlid = () => {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        rtl: true
    };

    return (
        <div className='multi-slid-container'>
            <Slider {...settings}>
                <div >
                    <CardItem/>
                </div>
                <div>
                    <CardItem/>
                </div>
                <div>
                    <CardItem/>
                </div>
                <div>
                    <CardItem/>
                </div>
                <div>
                    <CardItem/>
                </div>
                <div>
                    <CardItem/>
                </div>
                <div>
                    <CardItem/>
                </div>
            </Slider>
        </div>
    )
}

export default MultiSlid
