import React from 'react'
import Mission from '../../components/mission/mission.component'
import Pastors from '../../components/pastor/pastors.component'
import './about.page.scss'


const About = () => {
    return (
        <div className="aboutus">
            <div className="aboutus__big">
                <Mission />
            </div>

            <div className="aboutus__small">
                <Pastors />
            </div>
        </div>
    )
}

export default About