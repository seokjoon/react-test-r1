import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Ch2 from './Ch2/Ch2';
//import Ch3 from './Ch3/Ch3';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Ch3 name="Ch3" age={20} />, document.getElementById('root1'));
//ReactDOM.render(<Ch3/>, document.getElementById('root'));
ReactDOM.render(<Ch2/>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
