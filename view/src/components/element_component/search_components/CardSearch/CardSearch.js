import React from 'react'
import test from './test.jpg'
import './CardSearch.css'

const CardSearch = () => {
    return (
        <div className='card-search-container'>
            <div className="card-search-image">
                <img src={test} alt="" />
            </div>
            <div className="card-search-body">
                <h5 className="card-search-descreption">W3Schools is optimized for learning</h5>
                <div className="price-heart">
                    <h5 className="price"> 19 $</h5>
                    <i class="far fa-heart"></i>
                </div>
                {/* <div className="color"></div> */}
            </div>
            <button className='btn add'>add</button>
        </div>
    )
}

export default CardSearch
