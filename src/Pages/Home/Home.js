import React, { Component } from 'react'
import Page from '../../components/Containers/Page'
import trackitThumb from '../../Images/Helpdesk_thumbnail.PNG';
import empDirThumb from '../../Images/employee_facebook.PNG';
import armThumb from '../../Images/ARM_thumb.PNG';
import empFloorchartThumb from '../../Images/empFloorchart_thumb.PNG';
import './Home.css';
import Cardbootstrap from './Cardbootstrap';


export default class Home extends Component {
    render() {
        return (
            <Page>
                <div className="container-fluid p-3" id="HomeContainer">
                    <div className="row w-100 align-items-center">

                        <div className="col-md-4">
                            <Cardbootstrap title="Track-it! tickets" subtitle="for Helpdesk"
                            url="http://utility/TrackItWeb/SelfService/Application/Main"
                            description="Check on status, follow up, and submit tickets"
                            picture={trackitThumb}></Cardbootstrap>
                        </div>

                        <div className="col-md-4">
                            <Cardbootstrap title="Employee Directory"
                            subtitle="may not be latest edition, check with communications"
                            url="http://intranet/intranetSite/documents/ADWR-Employees-Photo-Directory_7-13-2020.pdf"
                            description="may not be latest edition, check with communications"
                            picture={empDirThumb}></Cardbootstrap>
                        </div>

                        <div className="col-md-4">
                        <Cardbootstrap title="ARM"
                            subtitle="ADWR Report Manager"
                            url="http://intranet/ARM.net.2015/Login.aspx"
                            description="Common queries & reports against ADWR datasets"
                            picture={armThumb}></Cardbootstrap>
                        </div>

                        <div className="col-md-4">
                        <Cardbootstrap title="Employee Directory"
                            subtitle="Floorchart"
                            url="http://intranet/helpdesk/"
                            description="Find your coworkers"
                            picture={empFloorchartThumb}></Cardbootstrap>
                        </div>
                    </div>
                </div>
            </Page>
        )
    }
}
