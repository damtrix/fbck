import React from 'react'
import './header.styles.scss'

import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <NavLink to='/'>
                <img 
                    className="header__logo"
                    src="https://res.cloudinary.com/damtrix/image/upload/v1593809734/homePage/IMG-20200628-WA0018_xaagvp.jpg"
                    alt="" 
                />
            </NavLink>

            <div className="header__title">
                <span className= "header__title-one">First Baptist Church</span>
                <span className= "header__title-two">Keffi, Nasarawa state</span>
            </div>

            <div className="header__nav header__nav-res">
                {/* 1st link */}
                    <NavLink activeClassName='is-active' exact to="/" className="header__link">
                        <div className="header__option">
                            <span className= "header__option-one">Home</span>
                        </div>
                    </NavLink>
                {/* 2nd link */}
                    <NavLink activeClassName='is-active' to="/about" className="header__link">
                        <div className="header__option">
                            <span className= "header__option-one">About</span>
                        </div>
                    </NavLink>
                {/* 3rd link */}
                    <NavLink activeClassName='is-active' to="/getInvolved" className="header__link">
                        <div className="header__option">
                            <span className= "header__option-one">Get Involved</span>
                        </div>
                    </NavLink>
                {/* 4th link */}
                    <NavLink activeClassName='is-active' to="/serviceLive" className="header__link">
                        <div className="header__option">
                            <span className= "header__option-one">Service Live</span>
                        </div>
                    </NavLink>
                {/* 5th link */}
                    <NavLink activeClassName='is-active' to="/contact" className="header__link">
                        <div className="header__option">
                            <span className= "header__option-one">Contact</span>
                        </div>
                    </NavLink>    

            </div>
        </div>
    )
}

export default Header