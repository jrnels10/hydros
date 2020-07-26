import React, { Component } from 'react'

export const RibbonContainer = (props) => {
    console.log(props)
    return <div className='ribbon__container' style={{ width: '100%', height: '30px', backgroundColor: '#3a3633' }}>
        {props.children}
    </div>
}