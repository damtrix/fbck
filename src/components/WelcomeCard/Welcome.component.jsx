import React from 'react'
import {Link} from'react-router-dom'
import Btn from '../btn/btn.component'
import './Welcome.styles.scss'


const WelcomeCard = ({ title, name, welcomeNote, body, closeRemarks}) => {
    return (
        <div className='welcome'>
            <h1 className='welcome__title'> {title} </h1>
            <h2 className='welcome__name'> {name} </h2>
            <h3 className='welcome__note'> {welcomeNote} </h3>
            <h2 className='welcome__body'> {body} </h2>
            <h2 className='welcome__remark'>{closeRemarks}</h2>
            <Link to="/about">
                <Btn name ="Read more" />
            </Link>
        </div>
    )
}

export default WelcomeCard
