import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Contact from './components/Contact/Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Tour from './components/Tours/Tour';
import Footer from './components/Footer/Footer';
import WhyBosnia from './components/WhyBosnia/WhyBosnia';
import Terms from './components/Terms/Terms';
import ScrollToTop from "./utils/ScrollToTop";
import BookNow from "./components/BookNow/BookNow";
import About from "./components/About/About";
import HungaryPromo from "./components/LandingPage/HungaryPromo";
import NotFound from "./components/NotFound/NotFound";
import Test from "./Test";
import { loadReCaptcha } from 'react-recaptcha-google'


class App extends Component {
    componentDidMount() {
        loadReCaptcha();
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <ScrollToTop>
                        <Switch >
                            <Route exact path="/" component={LandingPage} />
                            <Route path="/why-bosnia" component={WhyBosnia} />
                            <Route path="/about" component={About} />
                            <Route path="/tour/:name" component={Tour} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/terms-of-use" component={Terms} />
                            <Route path="/book-now" component={BookNow} />
                            <Route path="/hungary-special" component={HungaryPromo} />
                            <Route path="/test" component={Test} />
                            <Route path="*" component={NotFound} />
                        </Switch>

                    </ScrollToTop>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
