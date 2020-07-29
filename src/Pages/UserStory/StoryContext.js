import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'MANAGE_POU':
            // must be structured with keys type and item
            // type: determines the tab that the data is loaded under
            // results:{type:'GWSI', item:feature[0]}
            return {
                ...state,
                managePOU: action.payload.managePOU,
            }
        case 'MAP_VIEW':
            // must be structured with keys type and item
            // type: determines the tab that the data is loaded under
            // results:{type:'GWSI', item:feature[0]}
            return {
                ...state,
                view: action.payload.view,
            }
        default:
            return state;
    }
}

export class StoryProvider extends Component {
    state = {

    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const StoryConsumer = Context.Consumer;