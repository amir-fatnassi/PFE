import card1 from './card1.jpg'
import './CardItem.css'

const CardItem = () => {
    return (
        <div className='card-item-container'>
            <div className="card-item-img">
                <img src={card1} alt="" className="item-img"/>
            </div>
            <div className="card-item-info">
                <h1 className="card-item-title">title card</h1>
                <h6 className="price"> price card</h6>
            </div>
        </div>
    )
}

export default CardItem
