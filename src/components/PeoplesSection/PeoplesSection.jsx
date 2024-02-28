import React from 'react'
import Slider from '../Slider/Slider'

const PeoplesSection = () => {
    return (
        <div className="main-peoples bg-grid-white/[0.02] ">
            <div className="gradient-blog"></div>
            <div>
                <h1 className="blog-heading">From our <span>Blog</span></h1>
                <h1 className="blog-desc">Level Up Your Web3 Gaming Experience: Explore Our <br /> Blog for Insights, Tips, and Innovations in Gaming SDKs!</h1>
                <div className="slider">
                    <div className="gradient-slider"></div>
                    <Slider isCard={true} />
                </div>
            </div>
            <div className='review-section'>
                <div className="gradient-review"></div>
                <h1 className="blog-heading">Valuable <span>Reviews</span></h1>
                <div className="slider">
                    <div className="gradient-slider"></div>
                    <Slider isCard={false} />
                </div>
            </div>
        </div>
    )
}

export default PeoplesSection