import React, { Component } from 'react'

export default class LogSearch extends Component {
    render() {
        return (
            <div className="w-100 h-100">
                <span id="LogSearchGroup">
                    <input type="text" id="LogSearch"/>
                    <button id="LogSearchBtn" className="btn btn-primary btn-sm">Search</button>
                </span>
            </div>
        )
    }
}
