import HeroSection from '../../components/element_component/HeroSection/HeroSection'
import SimpleSlid from '../element_component/slider/simpleSlid/SimpleSlid'
import MultiSlid from '../element_component/slider/multiSlid/MultiSlid';
// import Title from '../element-component/title/Title';
// import m1 from './m1.jpg'
const Femme = () => {
    return (
        <>
            <HeroSection/>
            <SimpleSlid/>
            <HeroSection/>
            <MultiSlid/>
        {/*   <SouHero/>
            <SliderComp/>
            <Title/>
            <HeroSection img={m1} left='1'/> */}
        </>
    )  
}
export default Femme
