import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {

    switch (action.type) {
        case 'MANAGE_POU':
            return {
                ...state,
                managePOU: action.payload.managePOU,
            }
        case 'BOOKMARK':
            return {
                ...state,
                bookmark: action.payload.bookmark,
            }
        case 'MAP_VIEW':
            return {
                ...state,
                view: action.payload.view,
            }
        default:
            return state;
    }
}


export class ADJProvider extends Component {
    state = {
        managePOU: null,
        bookmark: null,
        view: null,
        adjDispatch: action => {
            if (action.length > 0) {
                action.map(item => {
                    return this.setState(state => reducer(state, item))
                });
            }
            else {
                return this.setState(state => reducer(state, action))
            }
        }
    }
    render() {
        if (window.Cypress) {
            window.__store__ = this.state;
        }
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const ADJConsumer = Context.Consumer;