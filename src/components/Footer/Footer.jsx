import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* Left Side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />

                    <span className='secondaryText'>
                        Our vision is to make all people <br />
                        the best place to live for them
                    </span>
                </div>

                {/* Right Side */}
                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>145 New York ,Fl 4571 ,USA</span>

                    <div className="flexCenter f-menu">
                        <span><a href="#">Property</a></span>
                        <span><a href="#">Services</a></span>
                        <span><a href="#">Product</a></span>
                        <span><a href="#">About Us</a></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
