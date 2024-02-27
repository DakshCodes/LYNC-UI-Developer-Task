import React from 'react'
import Header from '../Header/Header'
import pattern from '../../assets/home/Pattern.png'
import logo1 from '../../assets/backed/Axelar.png'
import logo2 from '../../assets/backed/image.png'
import logo3 from '../../assets/backed/LongHashX.png'
import { ArrowRight } from 'lucide-react'

const Home = () => {
    return (
        <div className="main-home bg-grid-white/[0.03] ">
            <Header />
            <div className="gredient"></div>
            <div className="gredient2"></div>
            <div className="home-img">
                <img src={pattern} alt="pattern" />
            </div>
            <div className="home-content">
                <h1>
                    Launch Your Game <br />
                    on <span>Web 3.0</span> in Minutes
                </h1>
                <p>We help game developers to launch their game on Web 3.0, by <br /> keeping blockchain complexities aside with WebWorld SDKs!</p>
                <div className='docs-btn'>
                    <a className="button" href="#">
                        Get started
                        <ArrowRight strokeWidth={1.25} size={14} />
                    </a>
                    <a className="button2" href="#">
                        View Docs
                        <ArrowRight strokeWidth={1.25} size={14} />
                    </a>
                </div>
            </div>

            <div className="backed">
                <h1>Backed by</h1>
                <div className="back-comp">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Home
