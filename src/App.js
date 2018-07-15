import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tour from './components/Tours/Tour';
import AppContext from './constants/mainContext';
import { tours } from './constants/constants';
import ScrollToTop from './utils/ScrollToTop';
import Footer from './components/Footer/Footer';
import WhyBosnia from './components/WhyBosnia/WhyBosnia';
import About from './components/About/About';
import Terms from './components/Terms/Terms';

// import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//     // palette: {
//     //     primary: '#33a3fc',
//     //     secondary: '#fff'
//     // },
//     overrides: {
//         MuiButton: {
//             root: {
//                 color: 'white',
//                 '&:hover': {
//                     color:'#33a3fc',
//                     backgroundColor: 'white',
//                     border: '1px solid',
//                     borderColor: '#33a3fc'
//                 },
//                 backgroundColor: '#33a3fc',
//                 width: '300px',
//                 height: '50px',
//                 borderRadius: '10px',
//                 transition:'all 0.2s ease',
//                 cursor: 'pointer',
//             }
//         },
//         MuiInput: {
//             root : {
//                 height: '35px',
//                 '&:before': {
//                     display: 'none'
//                 },
//                 backgroundColor:'#fff',
//             }
//         }
//     }
// });

// const styles = {
//     root: {
//         display: 'flex',
//     },
// };

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppContext.Provider value={tours}>
                    <Router>
                        <div className="App">
                            <Header />
                            <ScrollToTop>
                                <Route exact path="/" component={LandingPage} />
                                <Route path="/why-bosnia" component={WhyBosnia} />
                                <Route path="/about" component={About} />
                                <Route path="/tour/:name" component={Tour} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/terms-of-use" component={Terms} />
                            </ScrollToTop>
                            <Footer />
                        </div>
                    </Router>
                </AppContext.Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
