import React from 'react'
import logo1 from '../../assets/game/87.png'
import logo2 from '../../assets/game/88.png'
import logo3 from '../../assets/game/89.png'
import logo4 from '../../assets/game/90.png'
import logo5 from '../../assets/game/91.png'

const Companies = () => {
    return (
        <div className="main-companies bg-grid-white/[0.02] ">
               <div className="gradient-companies"></div>
            <div className="backed-text">
                <p>LYNC provides a scalable infrastructure for launching web3 games, <br /> without hampering the <span>gaming experience.</span> <br /> So that you can deliver the next big hit!</p>
            </div>
            <div className="gaming-para">
                <div className='title-para'>
                    Making blockchain gaming <br /> accessible to <span>everyone!</span>
                </div>
                <div className="gaming-comp">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                </div>
                <div className='title-para'>
                    Power Up Your Web3 Game <br /> Development, With <span>LYNC SDKs</span>
                </div>
                <p>LYNC SDKs can be easily integrated into game engines like Unity 3D <br /> and Unreal Engine in a few clicks.</p>
            

            </div>
        </div>
    )
}

export default Companies
