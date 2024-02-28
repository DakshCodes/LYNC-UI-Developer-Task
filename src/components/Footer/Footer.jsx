import Lync from '../../assets/home/lync-gradient.png'
import footerGredient from '../../assets/home/footer-gradient.png'
import React from 'react'

const Footer = () => {
    return (
        <div className="main-footer bg-grid-white/[0.02] ">
            <div className="footer-title">
                <img className='lync-logo' src={Lync} alt="Lync" />
                <h1 className='footer-heading'>Got a game idea ? <br />
                    Let's make it big together !!!</h1>
                <button>
                    <span>Get Started</span>
                </button>
            </div>
            <div className="footer-content">
                <div className="footer-items">
                    <div className="item-left">
                        <img src="https://lync.world/app/assets/lync-text-logo.png" alt="logo" />
                        <p>A GameFi Infrastructure</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/company/lync-world/" target="_blank" rel="noopener noreferrer" className="social-links">
                                <img src="https://lync.world/app/assets/linkedin.png" alt="linkedin" />
                            </a>
                            <a href="https://warpcast.com/~/channel/lync" target="_blank" rel="noopener noreferrer" className="social-links farcatser">
                                <img src="https://lync.world/app/assets/farcatser.svg" alt="farcatser" />
                            </a>
                            <a href="https://twitter.com/Lyncworld" target="_blank" rel="noopener noreferrer" className="social-links">
                                <img src="https://lync.world/app/assets/twitter.png" alt="twitter" />
                            </a>
                        </div>
                    </div>
                    <div className="item-middle">
                        <div className="middle-content">
                            <p className="content-title">Product</p>
                            <div className="content-items">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">Marketplace SDK</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">Transfer API's</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">Token API's</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">NFT API's</a>
                            </div>
                        </div>
                        <div className="middle-content">
                            <p className="content-title">Company</p>
                            <div className="content-items">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">About us</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">Careers</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">Security</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">Privacy Policy</a>
                            </div>
                        </div>
                        <div className="middle-content">
                            <p className="content-title">Contact</p>
                            <div className="content-items">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">Email</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">Discord</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">Telegram</a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="content-item text-body-2">Press</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-right">
                        <p className="right-title">Supercharge your inbox</p>
                        <p className="right-subtext">Sign up for our newsletter</p>
                        <form className="email-form">
                            <input type="email" name="email" id="emai" className="email-form-input" placeholder="enter your email address" fdprocessedid="2qbv0o" />
                            <button type="submit" className="email-form-submit-btn" fdprocessedid="vzavwh">Submit</button>
                        </form>
                    </div>
                </div>
            <small className="copyright-text">2024 LYNC World · <a href="" target="_blank" rel="noopener noreferrer">Terms of service</a></small>
            </div>
            <div className="footer-gredient-container">
                <img className='footer-gredient' src={footerGredient} alt="footerGredient" />
            </div>
        </div>
    )
}

export default Footer
