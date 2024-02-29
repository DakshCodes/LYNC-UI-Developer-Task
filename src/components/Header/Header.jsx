import React, { useEffect } from 'react'
import logo from '../../assets/home/logo.png'
import { MoveRight } from 'lucide-react'
import { animate, motion, stagger } from 'framer-motion'

const Header = () => {

  useEffect(() => {
    animate(".menu-items li", { opacity: 1 }, { delay: stagger(0.1, { startDelay: 0.5 }) })
  }, []);

  return (
    <div className="header-container">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "backInOut" }}
        className='header-main'>
        <nav>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "circInOut" }}
            viewport={{ once: true }}
            id="header-menu-btn" className="header-menu-btn">
            <img src="https://lync.world/app/assets/menu.png" alt="menu" className="menu-img" />
          </motion.button>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "backInOut" }}
            className="logo">
            <img src={logo} alt="logo" />
          </motion.div>
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
          <motion.button
            initial={{ opacity: 0, x: -30, }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="button">
            Get started
            <MoveRight strokeWidth={1.8} size={18} />
          </motion.button>
        </nav>
      </motion.div>
    </div>
  )
}

export default Header
