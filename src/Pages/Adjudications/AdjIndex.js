import React, { Component } from 'react';
import { ADJProvider, ADJConsumer } from './AdjContext';
import { Route } from 'react-router-dom'
import { POU_Table } from './POU'
import adjData from './../../adjData.json';
import AdjMap from './Map/AdjMap'
import Page from '../../components/Containers/Page'
import Adjucation from './Adjucation';

export default class AdjIndex extends Component {

    state = {
        mapView: null
    }
    render() {
        console.log(this.props)
        const filtered = adjData.filter(item => {
            if (item.Type === "D" || item.Type === "P" || item.Type === "S" || item.Type === "W" || item.Type === "Mining") {
                return item
            }
        });
        return (
            <ADJProvider>
                <ADJConsumer>
                    {value => {
                        return <Page name='Adjudication'  >
                            <Adjucation value={value}>
                                <Route exact path='/adjudications/' component={Home} data={filtered} />
                                <Route path='/adjudications/pou' component={POU_Table} data={filtered} />
                                <Route path='/adjudications/map' render={() => <AdjMap value={value} data={filtered} />} />
                            </Adjucation>
                        </Page>
                    }}
                </ADJConsumer>
            </ADJProvider >
        )
    }
}

const Home = () => {
    return <h3>home</h3>
}