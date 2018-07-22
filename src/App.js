import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Contact from './components/Contact/Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Tour from './components/Tours/Tour';
import AppContext from './constants/mainContext';
import { tours } from './constants/constants';
import ScrollToTop from './utils/ScrollToTop';
import Footer from './components/Footer/Footer';
import WhyBosnia from './components/WhyBosnia/WhyBosnia';
import About from './components/About/About';
import Terms from './components/Terms/Terms';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <ScrollToTop>
                        <Switch >
                            <Route exact path="/" component={LandingPage} />
                            <Route path="/why-bosnia" component={WhyBosnia} />
                            {/*<Route path="/about" component={About} />*/}
                            <Route path="/tour/:name" component={Tour} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/terms-of-use" component={Terms} />
                        </Switch>

                    </ScrollToTop>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
