import React, { Component } from 'react'

export default class Cardbootstrap extends Component {
    render() {
        const {title, subtitle, url, description, picture} = this.props;
        return (
            <div>
                <div className="card">
                <a href={url} target="_blank">
                    <img className="card-img-top" src={picture} alt="picture of Helpdesk web app" id="helpdeskCardImg" height="160px"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                        <p className="card-text">{description}</p>
                        
                    </div>
                </a>
                </div>
            </div>
        )
    }
}
