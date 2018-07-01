import React, { Component, createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tour from './components/Tours/Tour';
import AppContext from './constants/mainContext'
import {tours} from "./constants/constants";
import ScrollToTop from "./utils/ScrollToTop";
import Footer from "./components/Footer/Footer";
import WhyBosnia from "./components/WhyBosnia/WhyBosnia";
import About from "./components/About/About";


class App extends Component {
    render() {
        return (
            <AppContext.Provider value={tours}>
            <Router>

                <div className="App">
                    <Header />
                    <ScrollToTop>
                    <Route exact path="/" component={MainContent} />
                    <Route path="/why-bosnia" component={WhyBosnia} />
                    <Route path="/about" component={About} />
                    <Route path="/tour/:name" component={Tour} />
                    <Route path="/contact" component={Contact} />
                    {/*<Contact id={'contact'} />*/}
                    </ScrollToTop>
                    <Footer />
                </div>

            </Router>
            </AppContext.Provider>

        );
    }
}

export default App;
