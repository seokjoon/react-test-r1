import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import T1a from './tests/t1/T1a';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<T1a/>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
