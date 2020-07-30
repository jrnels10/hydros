import React, { Component } from 'react'
import './Story.css';

export default class UserStory extends Component {
    constructor(props){
        super(props);
        this.state = {role: "", action: "", benefit: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let prop = event.target.name;//name attribute of input element
        if(prop === "userRole"){
            this.setState({role: event.target.value});
        }
        if(prop === "userAction"){
            this.setState({action: event.target.value});
        }
        if(prop === "userBenefit"){
            this.setState({benefit: event.target.value});
        }
        console.log(event.target.name)
    }

    handleSubmit(event) {
        alert(`role:${this.state.role}\naction:${this.state.action}\nbenefit:${this.state.benefit}`);
        this.setState({role:'', action:'', benefit:''});
        event.preventDefault();
        document.getElementById('UserStoryForm').reset();
    }

    render() {
        return (
            <div id="StoryContainer">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-8 offset-md-2">
                        <div className="jumbotron">
                        <h4>See a chance to make this app better?</h4>
                        <h4>Submit a User Story for the Dev team!</h4>
                        <h6>The structure of a user story is laid out below</h6>
                            <form onSubmit={this.handleSubmit} id="UserStoryForm">
                                <div className="form-group">
                                    <label htmlFor="userRole">As a...</label>
                                    <input type="text" value={this.state.user} name="userRole" placeholder="<user>" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userAction">I want to...</label>
                                    <input type="text" name="userAction" placeholder="<action>" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userBenefit">so that...</label>
                                    <input type="text" name="userBenefit" placeholder="<benefit>" onChange={this.handleChange}/>
                                </div>
                                <button className="btn btn-primary btn-lg">Submit User Story</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
