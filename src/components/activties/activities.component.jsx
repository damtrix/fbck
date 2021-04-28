import React from 'react'
import './activities.styles.scss'


const ActivitiesCard = ({ name, first, second, third, forth, fifth }) => {
 
    return (
        <div className="activities">
            <h2 className="activities__heading">
                {name}
            </h2>

            <div className="activities__body">
                <p> {first} </p>
                <p> {second} </p>
                <p> {third} </p>
                <p> {forth} </p>
                <p> {fifth} </p>
            </div>

        </div>
    )
}

export default ActivitiesCard