import React, { useState } from 'react';
import './Cards.css'

export const Card = ({ formIdx, children, title }) => {
    const [openCard, setopenCard] = useState(formIdx === 0)
    return <div className={`card card--${openCard ? 'visible' : 'hidden'}`}>
        <label
            className={`card__title card__title--${openCard ? 'visible' : 'hidden'}`}
            onClick={() => setopenCard(!openCard)}
        >{title}</label>
        <div className='card__content container'>
            {children}
        </div>
    </div>
}