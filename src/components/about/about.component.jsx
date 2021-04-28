import React from 'react'
import {Link} from 'react-router-dom'
import Btn from'../../components/btn/btn.component'
import './about.styles.scss'

const AboutUs = ({ firstname,lastname,imageUrl,title,note}) => {
    return (
        <div className="about">
            <h1 className="about__name">
                <span className="about__name-firstname">{firstname}</span>
                <span className="about__name-lastname">{lastname}</span>
            </h1>

            <img src={imageUrl} alt="About 1" className="about__img"/>

            <h3 className="about__title">{title}</h3>
            <h4 className="about__note">{note}</h4>

            <Link to="/about">
                <Btn name = "Read more"/>
            </Link>

        </div>
    )
}

export default AboutUs