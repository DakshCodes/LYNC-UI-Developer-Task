import React from 'react'
import { motion } from 'framer-motion'
import Slider from '../Slider/Slider'

const PeoplesSection = () => {
    return (
        <div className="main-peoples bg-grid-white/[0.01] ">
            <div className="gradient-blog"></div>
            <div className='blog-section'>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "circInOut" }}
                    viewport={{ once: true }}
                    className="blog-heading">From our <span>Blog</span></motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "circInOut" }}
                    viewport={{ once: true }}
                    className="blog-desc">Level Up Your Web3 Gaming Experience: Explore Our <br /> Blog for Insights, Tips, and Innovations in Gaming SDKs!</motion.h1>
                <div className="slider">
                    <div className="gradient-slider"></div>
                    <Slider isCard={true} />
                </div>
            </div>
            <div className='review-section'>
                <div className="gradient-review"></div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "circInOut" }}
                    viewport={{ once: true }}
                    className="blog-heading">Valuable <span>Reviews</span></motion.h1>
                <div className="slider">
                    <div className="gradient-slider"></div>
                    <Slider isCard={false} />
                </div>
            </div>
        </div>
    )
}

export default PeoplesSection
