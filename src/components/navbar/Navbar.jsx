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
                {/* <li onClick={() => { setMenu("shop") }}>Shop{ menu ==="shop"?}</li> */}
                <li onClick={() => { setMenu("shop") }} style={{ color: menu === "shop" ? "#ff4141" : "#626262" }}><Link to='/'>Shop</Link></li>

                <li onClick={() => { setMenu("ethnic") }} style={{ color: menu === "ethnic" ? "#ff4141" : "#626262" }}><Link to='/ethnic'>Ethnic</Link></li>
                <li onClick={() => { setMenu("western") }} style={{ color: menu === "western" ? "#ff4141" : "#626262" }}><Link to='/western'>Western</Link></li>
                <li onClick={() => { setMenu("perfume") }} style={{ color: menu === "perfume" ? "#ff4141" : "#626262" }}><Link to="/perfume">Perfume</Link>Perfume</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <link to='/cart'><img src={cart_icon} alt="cart" /></link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
