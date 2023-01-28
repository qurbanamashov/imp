import React from 'react'
import "./Footer.scss"
function Footer() {
    return (
        <footer>
            <div className='footer_width'>
                <ul>
                    <h3>CATEGORIES</h3>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Shoes</li>
                    <li>Watches</li>
                </ul>
                <ul>
                    <h3>HELP</h3>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Shoes</li>
                    <li>Watches</li>
                </ul>
                <div className='Footer_navbarone'>
                    <h3>GET IN TOUCH</h3>
                    <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on +1 96 716 6879</p>
                    <div className='Footer_navbarone_icon'>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
                <div className='Footer_navbartwo'>
                    <h3>NEWSLETTER</h3>
                    <input placeholder='email'/>
                    <button>button</button>
                </div>
            </div>
            <p className='footer_text'>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
        </footer>
    )
}

export default Footer