import React from 'react'
import logo from '../../assets/home/logo.png'
import { MoveRight } from 'lucide-react'

const Header = () => {
  return (
    <div className='header-main'>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="menu-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">LYNC Portal</a>
          </li>
          <li>
            <a href="#">Request a demo</a>
          </li>
        </ul>
        <button className="button">
          Get started
          <MoveRight strokeWidth={1.8} size={18} />
        </button>
      </nav>
    </div>
  )
}

export default Header
