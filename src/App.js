import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Contact from "./components/Contact/Contact";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <MainContent />
          <Contact />
      </div>
    );
  }
}

export default App;
