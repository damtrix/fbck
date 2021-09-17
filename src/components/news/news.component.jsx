import React from 'react'
import Btn from '../../components/btn/btn.component'
import './news.styles.scss'


const News = () => {
    return (
        <div className="news">
            <h2 className="news__title">
                <span className="news__title-1">News &amp;</span>
                <span className="news__title-2"> Events</span>
            </h2>

            <div className="news__btn">
                <Btn name = "November Theme" />
            </div>

            <p className="news__theme">Our month of HIGHER COMING</p>
            <span className="news__verse">Phil. 4:4</span>

            <div className="news__btn">
                <Btn name = "4th January,2020" />
            </div>
   
        </div>
    )
}

export default News