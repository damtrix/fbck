import React, { useState } from 'react'
import Gallery from '../../components/gallery/gallery.component'
import { WELCOME_DATA, ACTIVITIES_DATA, ABOUT_DATA } from '../../data/data'
import WelcomeCard from '../../components/WelcomeCard/Welcome.component'
import ServiceCard from '../../components/serviceCard/Service.component'
import News from '../../components/news/news.component'
import ActivitiesCard from '../../components/activties/activities.component'
import AboutUs from '../../components/about/about.component'
import './home.styles.scss'

const Home = () => {
    const [ welcome] = useState(WELCOME_DATA)
    const [ activities ] = useState(ACTIVITIES_DATA)
    const [ about ] = useState(ABOUT_DATA)

    return (
        <div className="home">
            <div className="home__gallery">
                <Gallery />
            </div>

            <div className="home__content">
                <div className="home__content-1">
                    {
                        welcome.map(({id, ...otherWelcomeProps }) => ( <WelcomeCard key = { id } {...otherWelcomeProps} />))
                    }

                    <ServiceCard />
                </div>

                <div className="home__content-2">
                    {
                        about.map(({id, ...otherAboutProps}) => ( <AboutUs key={id} {...otherAboutProps} />))
                    }

                    <News />
                </div>
                
                <div className="home__content-3">
                    <h1 className="title">Weekly</h1>
                    <h1 className="subtitle">Activities</h1>

                    {
                        activities.map(({id, ...otherActivitiesProps }) => ( <ActivitiesCard key ={id} {...otherActivitiesProps} />))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
