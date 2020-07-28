import React, { Component } from 'react'
import LogSearch from './LogSearch'
import { RibbonContainer } from '../../components/Containers/Ribbons'
import { NavButton } from '../../components/Buttons/NavButtons'

export default class DrillerLog extends Component {
    render() {
        return (
            <div id="LogContainer" className="h-100">
                <RibbonContainer>
                    <div className="button__container float-right">
                        <NavButton to='/logs/search'>
                            <button onClick={() => this.setState({logSearch: true})}>Search</button>
                        </NavButton>
                    </div>
                </RibbonContainer>
                <div className="container p-3">
                    <div className="row w-100 h-100 align-items-center">
                        <div className="col-md-8 offset-md-2">
                            <LogSearch></LogSearch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
