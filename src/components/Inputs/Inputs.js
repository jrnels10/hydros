import React, { Component } from 'react'

export default class TextInputs extends Component {
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        const { name } = this.props;
        return (
            <input type='text' name={name} className={`form-control`} onChange={e => this.handleChange(e)} />
        )
    };
};
