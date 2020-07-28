import React, { Component } from 'react'
import LogSearch from './LogSearch'
import {LogsProvider, LogsConsumer} from './LogsContext';
import { Route } from 'react-router-dom'
import './Log.css'
import Page from '../../components/Containers/Page';
import DrillerLog from './DrillerLog';

export default class LogsIndex extends Component {
    render() {
        return (
            <LogsProvider>
                <LogsConsumer>
                    {value => {
                        return <Page name='DrillerLog'>
                            <DrillerLog value={value}>
                            <Route path="/logs/search" render={() => <LogSearch></LogSearch>} />
                            </DrillerLog>
                        </Page>
                    }}
                </LogsConsumer>
            </LogsProvider>
        )
    }
}