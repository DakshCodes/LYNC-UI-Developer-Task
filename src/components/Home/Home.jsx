import React, { useEffect } from 'react'
import Header from '../Header/Header'
import pattern from '../../assets/home/Pattern.png'
import logo1 from '../../assets/backed/Axelar.png'
import logo2 from '../../assets/backed/image.png'
import logo3 from '../../assets/backed/LongHashX.png'
import { ArrowRight } from 'lucide-react'
import { animate, motion, stagger } from 'framer-motion'

const Home = () => {

    useEffect(() => {
        animate(".home-content h1", { opacity: 1 }, { delay: stagger(0.1) })
    }, []);

    return (
        <div className="main-home bg-grid-white/[0.06] ">
            <div className="header-gradient-container"></div>
            <Header />
            <motion.div className="home-img">
                <motion.img
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "circInOut" }}
                    viewport={{ once: true }}
                    src={pattern} alt="pattern" />
            </motion.div>
            <div className="home-content">
                <h1>
                    Launch Your Game <br />
                    on <span>Web 3.0</span> in Minutes
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "circInOut" }}
                    viewport={{ once: true }}
                >We help game developers to launch their game on Web 3.0, by <br /> keeping blockchain complexities aside with WebWorld SDKs!</motion.p>
                <div className='docs-btn'>
                    <motion.a
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "backInOut" }}
                        viewport={{ once: true }}
                        className="button" href="#">
                        Get started
                        <ArrowRight strokeWidth={1.25} size={14} />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }}
                        viewport={{ once: true }}
                        className="button2" href="#">
                        View Docs
                        <ArrowRight strokeWidth={1.25} size={14} />
                    </motion.a>
                </div>
            </div>

            <div className="backed">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "circInOut" }}
                    viewport={{ once: true }}
                >Backed by</motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "circInOut" }}
                    viewport={{ once: true }}
                    className="back-comp">
                    <img src={logo3} alt="" />
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                </motion.div>
            </div>

        </div>
    )
}

export default Home
