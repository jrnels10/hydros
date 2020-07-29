import React, { Component } from 'react';
import { Provider } from './Context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Adjucation from './Pages/Adjudications/Adjucation';
import Navbar from './components/Nav/Navbar';
import hydrosLogo from './Images/hydrosLogo.png';
import './App.css'
import { POU_Table } from './Pages/Adjudications/POU';
import AdjIndex from './Pages/Adjudications/AdjIndex';
import LogsIndex from './Pages/DrillerLog/LogsIndex';
import storyIndex from './Pages/UserStory/StoryIndex';

export const App = () => {
    return (<div className='container-fluid bg-light p-0 m-0 h-100' id='app-div'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/adjudications/" component={AdjIndex} />
                <Route path="/logs/" component={LogsIndex} />
                <Route path="/userStory/" component={storyIndex} />
            </Switch>
        </BrowserRouter>
    </div>)
}