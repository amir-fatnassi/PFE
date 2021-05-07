import Button from '../Button/Button'
import './HeroSection.css'
import im1 from './im1.jpg'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <img src={im1} alt="" className="hero-img"/>
            <div className="hero-banner">
                <h3 className="min-title"> min title</h3>
                <h1 className="title">title</h1>
                <p className="discreption"></p>
                <Button>voir tout</Button>
            </div>
        </div>
    )
}

export default HeroSection
