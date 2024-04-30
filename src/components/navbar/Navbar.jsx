import React from 'react'
import './Navbar.css'
import Logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    return (

        <div className='navbar'>
            <div className="nav-logo">
                <img src={Logo} alt="Logo" />
                <p>Glamour Threads</p>
            </div>
            <ul className='nav-menu'>
                
                <li><Link to='/' onClick={() => { setMenu("shop") }} style={{ color: menu === "shop" ? "#ff4141" : "#626262" }}>Shop</Link></li>

                <li ><Link to='/ethnic' onClick={() => { setMenu("ethnic") }} style={{ color: menu === "ethnic" ? "#ff4141" : "#626262" }}>Ethnic</Link></li>
                <li ><Link to='/western' onClick={() => { setMenu("western") }} style={{ color: menu === "western" ? "#ff4141" : "#626262" }}>Western</Link></li>
                <li ><Link to="/perfume" onClick={() => { setMenu("perfume") }} style={{ color: menu === "perfume" ? "#ff4141" : "#626262" }}>Perfume</Link></li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
