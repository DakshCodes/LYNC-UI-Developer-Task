import React from 'react'
import gameAnimation from '../../assets/game/game-animation.gif'
import mediumAnimation from '../../assets/home/medium-animation.gif'
import eth from '../../assets/game/eth-animation.png'
import {motion} from 'framer-motion'


const CardSections = () => {
  return (
    <div className='cardsections-main bg-grid-white/[0.01]'>
      <div className="gradient-cards"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "circInOut" }}
        viewport={{ once: true }}
        className="power-card">
        <div className="power-content">
          <h1 className="power-card-title">Don't Worry about the <span>Web3</span> Complexities</h1>
          <ul className='power-point-list'>
            <li className='power-point-item'>Save 9-12 months of development time</li>
            <li className='power-point-item'>Focus completely on Game Dev and Mechanics </li>
            <li className='power-point-item'>Save Up to $500K+ on Salaries & Smart Contract Auditing</li>
            <li className='power-point-item'>Go Cross-Chain in a few clicks</li>
          </ul>
        </div>
        <div className="power-img">
          <img src={eth} alt="" />
        </div>
      </motion.div>
      <div className="project-done">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "circInOut" }}
          viewport={{ once: true }}
          className="project-docs">
          <div className="docs-content">
            <h1>
              Elevate Your Gameplay <br /> with Essential Insights!
            </h1>
            <p>
              Unleash Your Potential - <br /> Explore the Knowledge Hub <br /> Today!
            </p>
            <button>View Docs</button>
          </div>
          <div className="remote-img">
            <img src={gameAnimation} alt="" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "circInOut" }}
          viewport={{ once: true }}
          className="contracts">
          <div className="contracts-box">
            <h1>200+</h1>
            <p>Projects have <br /> downloaded &<br />integrated LYNC SDKs</p>
          </div>
          <div className="contracts-box">
            <h1>8000+</h1>
            <p>Contracts have been <br /> deployed via LYNC</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "circInOut" }}
          viewport={{ once: true }}
          className="user-ops">
          <div className="ops-content">
            <h1>50000+</h1>
            <p>User ops created in 10 <br /> hours</p>
            <div className="medium-img">
              <img src={mediumAnimation} alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CardSections
