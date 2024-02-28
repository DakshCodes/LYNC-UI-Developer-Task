import React from 'react'

const SliderCard = ({ card }) => {
    return (
        <div className="slider-card">
            <div className="image" >
                <img src={card.mainImgsrc} alt="" />
            </div>
            <div className="content">
                <a href="#">
                    <span className="title">
                        LYNC teamed up with Astar <br /> Network to effortlessly bring the <br /> next billion gamers into Web3 🎮
                    </span>
                </a>
                <p className="desc">
                    LYNC joins forces with Astar Network to <br /> allow game developers and studios to <br /> launch games in just a few minutes <br /> using LYNC’s SDK and infrastructure.
                </p>
                <a className="action" href="#">
                    Read more
                </a>
            </div>
        </div>

    )
}

export default SliderCard
