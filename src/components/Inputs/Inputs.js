import React, { Component } from 'react'

export default class TextInputs extends Component {
    handleChange = (e) => {
        const { name, callback } = this.props;
        this.setState({ value: e.target.value });
        return callback ? callback(e.target.value) : null;
    };

    render() {
        const { name, propRef, placeholder } = this.props;
        return (
            <input type='text' placeholder={placeholder} ref={propRef} name={name} className={`form-control form-control-sm`} onChange={e => this.handleChange(e)} />
        )
    };
};
