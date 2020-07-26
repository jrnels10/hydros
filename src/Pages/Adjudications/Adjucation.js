import React, { Component } from 'react';
import Page from '../../components/Containers/Page';
import { ADJProvider, ADJConsumer } from './AdjContext';
import './adj.css'
import { RibbonContainer } from '../../components/Containers/Ribbons';
import POU from './POU';
import { Route } from 'react-router-dom';
import { NavButton } from '../../components/Buttons/NavButtons';
import AdjMap from './Map/AdjMap';

export default class Adjucation extends Component {

    render() {
        return (
            <ADJProvider>
                <ADJConsumer>
                    {value => {
                        const { managePOU } = value;
                        return < Page name='Adjudication' value={value} >
                            <RibbonContainer>
                                <NavButton to='/Adjudications'>
                                    Adjudications
                                </NavButton>
                            </RibbonContainer>
                            {managePOU ? <POU pou={managePOU} /> : null}
                            <AdjMap value={value} />
                        </Page>
                    }}
                </ADJConsumer>
            </ADJProvider >
        )
    }
}
//Home / Adjudications / PWR Map / DOM-18-A20008010ABD-01 / Domestic