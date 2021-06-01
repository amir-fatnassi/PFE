
import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <ul className="nav-menu">
                <li>
                    <Link className='nav-link acvtive' to='/' >FEMME</Link> 
                </li>
                <li><Link className='nav-link' to='/homme' >HOMME</Link></li>
                <li><Link className='nav-link' to='/search'>Enfants</Link></li>
                <li><Link className='nav-link' to='/enfants'>Curvy</Link></li>
                <li><Link className='nav-link' to='/product'>Beaute</Link></li>
            </ul>
            <div className="logo">SHEN</div>
            <ul className="nav-menu">
                <li><i className="fas fa-user"></i></li>
                <li><i className="fas fa-shopping-cart"></i> 0</li>
                <li><i className="far fa-heart"></i> 0</li>
                <li><i className="fas fa-headset"></i></li>
                <li><i className="fas fa-globe"></i></li>
            </ul>
        </div>
    )
}

export default NavBar

