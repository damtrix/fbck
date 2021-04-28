import React from 'react'
import './btn.styles.scss'

const Btn = ({name}) => {
    return (
        <button className='btn'>
            {name}
        </button>
    )
    
}

export default Btn