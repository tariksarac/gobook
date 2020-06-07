import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker';
import { isMobile } from 'react-device-detect';

export const mobile = isMobile;

ReactDOM.render(<App />, document.getElementById('root'));
// unregister();
registerServiceWorker();
