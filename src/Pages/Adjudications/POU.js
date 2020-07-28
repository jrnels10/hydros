import React, { Component } from 'react';
import PWRforms from './Forms/PWR';

export default class POU_Form extends Component {
    render() {
        const { pou } = this.props;
        const manage = pou ? 'active' : 'hidden';
        return (
            <div className={`adj__manage__POU adj__manage__POU--${manage} `}>
                <PWRforms pou={pou} />
            </div >
        )
    }
}


export class POU_Table extends Component {
    render() {
        const { pou } = this.props;
        const manage = pou ? 'active' : 'hidden';
        return (
            <div>
                Hello
            </div >
        )
    }
}