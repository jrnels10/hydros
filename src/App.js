import React, { Component } from 'react';
import { Provider } from './Context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Adjucation from './Pages/Adjudications/Adjucation';
import Navbar from './components/Nav/Navbar';

import './App.css'
import POU from './Pages/Adjudications/POU';

export const App = () => {
    return (<div className='container-fluid bg-light p-0 m-0 h-100' id='app-div'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>

            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Adjudications/" component={Adjucation} />
                <Route path='/Adjudications/POU' component={POU} />
                {/* <Route exact path="/swtopo2" component={Distributor(SurfaceWater, "surfaceWater_portal")} />
                <Route exact path="/wellshub" component={Distributor(WellsHub, 'wellsHub_portal')} />
                <Route exact path="/recovery" component={Distributor(Recovery, "Recovery_portal")} />
                <Route exact path="/gwsi" component={Distributor(GWSI, "GWSI_portal")} />
                <Route exact path="/unauthorized" component={Distributor(Unauthorized)} />
            <Route component={Distributor(Home, '404')} /> */}
            </Switch>
        </BrowserRouter>
    </div>)
}