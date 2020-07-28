import React, { Component } from 'react'
import LogSearch from './LogSearch'
import './Log.css'

export default class LogsIndex extends Component {
    render() {
        return (
            <div id="LogContainer" className="h-100">
                <div className="container h-100 p-3">
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