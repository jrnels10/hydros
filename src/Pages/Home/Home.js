import React, { Component } from 'react'
import Page from '../../components/Containers/Page'
import trackitThumb from '../../Images/Helpdesk_thumbnail.PNG';
import empDirThumb from '../../Images/employee_facebook.PNG';
import armThumb from '../../Images/ARM_thumb.PNG';
import empFloorchartThumb from '../../Images/empFloorchart_thumb.PNG';


export default class Home extends Component {
    render() {
        return (
            <Page>
                <div className="container p-3">
                    <div className="row w-100 align-items-center">
                        <div className="col-md-4">
                        <a href="http://utility/trackitweb/selfservice/login/" target="_blank">
                        <div className="card">
                            <img className="card-img-top" src={trackitThumb} alt="picture of Helpdesk web app" id="helpdeskCardImg" height="160px"/>
                            <div className="card-body">
                                <h5 className="card-title">Tickets</h5>
                                <h6 className="card-subtitle mb-2 text-muted">for Helpdesk</h6>
                                <p className="card-text">Check on status, follow up, and submit tickets</p>
                                <a href="http://utility/trackitweb/selfservice/login/" target="_blank" className="card-link">Track-it!</a>
                                <a href="mailto:tickets@azwater.gov" className="card-link" target="_blank">tickets@azwater.gov</a>
                            </div>
                        </div>
                        </a>
                        </div>

                        <div className="col-md-4">
                        <a href="http://intranet/intranetSite/documents/ADWR-Employees-Photo-Directory_7-13-2020.pdf" target="_blank">
                        <div className="card">
                            <img className="card-img-top" src={empDirThumb} alt="picture first page of employee direcotry" id="empDirCardImg" height="160px"/>
                            <div className="card-body">
                                <h5 className="card-title">Employee Directory</h5>
                                <h6 className="card-subtitle mb-2 text-muted">may not be latest edition, check with communications</h6>
                                <p className="card-text">Put a face to a name!</p>
                                <a href="http://intranet/intranetSite/documents/ADWR-Employees-Photo-Directory_7-13-2020.pdf" target="_blank" className="card-link">Go there now</a>
                            </div>
                        </div>

                        </a>
                        </div>
                        <div className="col-md-4">
                        <a href="http://intranet/ARM.net.2015/Login.aspx" target="_blank">
                        <div className="card">
                            <img className="card-img-top" src={armThumb} alt="picture ADWR Report Manager" id="empDirCardImg" height="160px"/>
                            <div className="card-body">
                                <h5 className="card-title">ARM</h5>
                                <h6 className="card-subtitle mb-2 text-muted">ADWR Report Manager</h6>
                                <p className="card-text">Query our data sources</p>
                                <a href="http://intranet/ARM.net.2015/Login.aspx" target="_blank" className="card-link">Query Away!</a>
                            </div>
                        </div>
                        </a>
                        </div>

                        <div className="col-md-4">
                        <a href="http://intranet/helpdesk/" target="_blank">
                        <div className="card">
                            <img className="card-img-top" src={empFloorchartThumb} alt="picture ADWR Report Manager" id="empDirCardImg" height="160px"/>
                            <div className="card-body">
                                <h5 className="card-title">Water Resources Employee Cubicle Finder</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Floorchart</h6>
                                <p className="card-text">Find your coworkers</p>
                                <a href="http://intranet/helpdesk/" target="_blank" className="card-link">Where is Everybody?</a>
                            </div>
                        </div>
                        </a>
                        </div>
                    </div>
                </div>
            </Page>
        )
    }
}
