import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.styles.scss'


const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer">
                <div className="footer__home">
                    <NavLink to="/">
                        <img 
                            className="footer__logo"
                            src="https://res.cloudinary.com/damtrix/image/upload/v1593809734/homePage/IMG-20200628-WA0018_xaagvp.jpg"
                            alt="" 
                        />
                    </NavLink>

                    <div className="footer__title">
                        <span className= "footer__title-one">First Baptist Church</span>
                        <span className= "footer__title-two">Keffi, Nasarawa state</span>
                    </div>
                </div>

                <div className="footer__worship">
                    <h2 className="footer__text">Worship</h2>
                    <p>Sunday First service 7:00am</p>
                    <p>Sunday School 9:00am</p>
                    <p>Disciple Lifestyle class 10:00am</p>
                    <p>Second Service 10:00am</p>
                    <p>House fellowship 6:00pm</p>
                </div>

                <div className="footer__handles">
                    <h2 className="footer__text">Social Handles</h2>
                    <NavLink className="footer__handles-link" to=''>
                        YouTube
                    </NavLink>

                    <NavLink className="footer__handles-link" to=''>
                        Facebook
                    </NavLink>

                    <NavLink className="footer__handles-link" to=''>
                        Instagram
                    </NavLink>

                    <NavLink className="footer__handles-link" to=''>
                        Twitter
                    </NavLink>

                </div>

                <div className="footer__links">
                    <h2 className="footer__text">Useful Link</h2>
                </div>

                <div className="footer__faithwork">
                    <h2 className="footer__text">Faith &amp; Work</h2>
                </div>
            
            </div>

            <p className="copyright">First Baptist Church, Keffi, Nasarawa State &copy; {new Date().getFullYear()}. Privacy Policy</p>
        </div>
    )
}

export default Footer