import Button from '../Button/Button'
import './HeroSection.css'

const HeroSection = ({image, mTitle, title}) => {
    return (
        <div className='hero-container'>
            <img src={image} alt="" className="hero-img"/>
            <div className="hero-banner">
                <h3 className="min-title"> {mTitle}</h3>
                <h1 className="title">{title}</h1>
                <p className="discreption"></p>
                <Button>voir tout</Button>
            </div>
        </div>
    )
}

export default HeroSection
