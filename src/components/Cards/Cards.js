import React, { useState } from 'react';
import './Cards.css'

export const Card = ({ formIdx, children, title }) => {
    const [openCard, setopenCard] = useState(formIdx === 0)
    return <div className={`card card--${openCard ? 'visible' : 'hidden'}`}>
        <label
            className={`card__title card__title--${openCard ? 'visible' : 'hidden'}`}
            onClick={() => setopenCard(!openCard)}
        >{title}</label>
        <div className={`card__expand__container`}>
            <div id="expand-contract" className={`card__content card__content--${openCard ? 'visible' : 'hidden'} container`}>
                {children}
            </div>
        </div>
    </div>
}

export const BookmarkCard = ({ children }) => {
    const [openCard, setopenCard] = useState(false)

    return <div className={`card bookmark__card--${openCard ? 'visible' : 'hidden'}`}>
        <label
            className={`bookmark__card__title bookmark__card__title--${openCard ? 'visible' : 'hidden'}`}
            onClick={() => setopenCard(!openCard)}
        >hello</label>
        <div className={`bookmark__card__expand__container`}>
            <div className={`bookmark__card__content bookmark__card__content--${openCard ? 'visible' : 'hidden'} container`}>
                {children}
            </div>
        </div>
    </div>
}