import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { RiCloseLine } from 'react-icons/ri'

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }

    }

    return (
        <section className='h-wrapper'>
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />

                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false)
                    }}>
                    <div className="flexCenter h-menu"
                        style={getMenuStyles(menuOpened)}
                    >
                        <a href="#residencies">Residencies</a>
                        <a href="#ourValue">Our value</a>
                        <a href="#contactUs">Contact Us</a>
                        <a href="#getStarted">Get Started</a>
                        <button className='button'>
                            <a href="#contactUs">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>

                <div className="menu-icon" >
                    {menuOpened ? (<RiCloseLine onClick={() => setMenuOpened(false)} fontSize={30} />) : <BiMenuAltRight onClick={() => setMenuOpened(true)} fontSize={30} />}

                </div>

            </div>
        </section >
    )
}

export default Header
