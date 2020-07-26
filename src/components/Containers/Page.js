import React, { Component } from 'react'

export default class Page extends Component {
    render() {
        const { name, children } = this.props;
        return (
            <div className={`page__container page__container__${name} `}>
                {children}
            </div >
        )
    }
}
