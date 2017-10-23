// could not make this polyfill work for testing
// polyfills in place for prod and dev web.config

import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
