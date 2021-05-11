import HeroSection from '../../components/element_component/HeroSection/HeroSection'
import SimpleSlid from '../element_component/slider/simpleSlid/SimpleSlid'
import MultiSlid from '../element_component/slider/multiSlid/MultiSlid';
import slid1 from '../image/slid-4.jpg'

const Homme = () => {
    return (
        <>
            <HeroSection 
                image={slid1} 
                mTitle='Shop jewellery handmade in Sydney' 
                title='vaconcy mode'
            />
            <SimpleSlid
                image={slid1} 
                mTitle='Shop jewellery handmade in Sydney' 
                title='vaconcy mode'
            />
            <HeroSection/>
            <MultiSlid/>
        </>
    )
}

export default Homme
