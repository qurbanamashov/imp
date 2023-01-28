import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <img src='https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png' />
                <ul>
                    <Link to={"/"}> <li>Home</li> </Link>
                    <Link to={'/add'}><li>ADD</li></Link>
                    <li>Features</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='navbar_icon'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar