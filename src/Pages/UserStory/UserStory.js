import React, { Component } from 'react'
import './Story.css';

export default class UserStory extends Component {
    render() {
        return (
            <div className="container-fluid p-3" id="StoryContainer">
                <div className="container text-center">
                <div className="row w-100 align-items-center">
                    <div className="col-md-12">
                        <form action="">
                            <div className="col-md-4">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                    <label htmlFor="userRole">As a...</label>
                                    </div>
                                    <div className="col-md-6">
                                    <input type="text" name="userRole" placeholder="<role>" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 offset-md-1">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                    <label htmlFor="userAction">I want to...</label>
                                    </div>
                                    <div className="col-md-6">
                                    <input type="text" name="userAction" placeholder="<action>" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 offset-md-2">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                    <label htmlFor="userBenefit">so that...</label>
                                    </div>
                                    <div className="col-md-6">
                                    <input type="text" name="userBenefit" placeholder="<benefit>" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
