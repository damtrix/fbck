import React from 'react'
import './mission.styles.scss'



const Mission = () => {
    return (
        <div className="mission">
            <h2 className="heading__1">
                Global <span>Mission</span>
            </h2>
            
            <div className="mission__content">
                <img src="https://res.cloudinary.com/damtrix/image/upload/homePage/IMG-20200628-WA0020_jmsikb.jpg" alt="Global Mission" className="mission__content-img"/>

                <div className="mission__content-note">
                    <h3 className="heading__2">
                        First Baptist Church, Keffi, Nasarawa state
                    </h3>

                    <blockquote className="mission__content-note--full">
                        We exists to love and worship God by exalting the name
                         of Jesus the Messiah and saviour of 
                         the world, to make disciples of ALL Nations,beginning 
                         with the unreached people of the Federal Capital Territory 
                         and its environs and also equip them for works of service through the power of the Holy Spirit.
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Mission