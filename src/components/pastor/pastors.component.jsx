import React from 'react'
import './pastors.styles.scss'


const Pastors = () => {
    return (
        <div className="pastors">
            <h2 className="pastor">
                Our 
                <span> Pastors</span>
            </h2>

            <div className="pastor__list">
                <h3 className="pastor__list-name">
                    Rev. Dr. Taiwo, Samuel Baba (J.P)        
                </h3>
                <span>Minister in charge</span>
            </div>

            <div className="pastor__list">
                <h3 className="pastor__list-name">
                    Rev. A.S. James-Adetayo        
                </h3>
                <span>Associate Pastor</span>
            </div>

            <div className="pastor__list">
                <h3 className="pastor__list-name">
                    Mr. Wale Ajadi        
                </h3>
                <span>Church Secretary</span>
            </div>

            <div className="pastor__list">
                <h3 className="pastor__list-name">
                    Mr. T.w. Benjamin      
                </h3>
                <span>Asst. Church Secretaries</span>
            </div>
        </div>
    )
}

export default Pastors