import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const Contact = () => {
    return (
        <section className="c-wrapper" id='contactUs'>
            <div className="paddings innerWidth flexCenter c-container">
                {/* Left Side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact US</span>
                    <span className='secondaryText'>We always ready to help by providing best service to You <br />
                        We believe a good blace to live can make your life better.</span>

                    <div className="flexColStart contactModes">
                        {/*First Row  */}
                        <div className="flexStart row">

                            {/* First Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 123 146 25</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call now</div>
                            </div>

                            {/* Second Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 123 146 25</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat now</div>
                            </div>

                        </div>

                        {/*Second Row  */}
                        <div className="flexStart row">

                            {/* third Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>021 123 146 25</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call now</div>
                            </div>

                            {/* Fourth Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>021 123 146 25</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message now</div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
