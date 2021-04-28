import React from 'react'
import './service.styles.scss'
import MyYouTube from '../youtube/Youtube.component'

const ServiceCard = () => {
    return (
        <div className="service">
            <h1 className="service__title">
                <span className="service__title-1">Service Live</span>
                <span className="service__title-2">Connect to Jesus</span>
            </h1>

            <MyYouTube videoId="FCHwrfMUNIU" />
        </div>
    )
}

export default ServiceCard