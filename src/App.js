import React, { Component, createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllTour from './components/Tours/AllTour';
import Tour from './components/Tours/Tour';
import AppContext from './constants/mainContext'
import {tours} from "./constants/constants";


class App extends Component {
    render() {
        return (
            <AppContext.Provider value={tours}>
            <Router>
                <div className="App">
                    <Header />

                    <Route exact path="/" component={MainContent} />
                    <Route path="/all-tours" component={AllTour} />
                    <Route path="/tour/:name" component={Tour} />
                    <Contact id={'contact'} />
                </div>
            </Router>
            </AppContext.Provider>

        );
    }
}

export default App;
