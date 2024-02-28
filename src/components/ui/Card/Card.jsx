import React from 'react'
import cardimg from '../../../assets/game/24.png'

const Card = () => {
    return (
        <div className="card">
            <div className="card-img" >
                <img src={cardimg} alt="" />
            </div>
            <div className="card-info">
                <p className="text-title">LYNC Wallet SDK</p>
                <p className="text-body">Empowering developers to integrate
                    account abstraction in their game,
                    dapp, metaverse and more in
                    minutes.</p>
            </div>
        </div>
    )
}

export default Card
