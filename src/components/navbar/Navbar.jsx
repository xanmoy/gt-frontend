import React from 'react'
import './Navbar.css'
import Logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
const Navbar = () => {
  return (
    <div className='navbar'>
          <div className="nav-logo">
              <img src={Logo} alt="Logo" />
              <p>Glamour Threads</p>
          </div>
          <ul className='nav-menu'>
              <li>Shop<hr/></li>
              <li>Ethnic</li>
              <li>Western</li>
              <li>Perfume</li>
          </ul>
          <div className="nav-login-cart">
              <button>Login</button>
              <img src={cart_icon} alt="cart" />
          </div>
    </div>
  )
}

export default Navbar
