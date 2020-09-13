import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hello from './Hello';
import Clock from './Clock';
import Props from './Props';
import State from './State';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <Hello /> */}
//     {/* <Clock /> */}
//     {/* <Props attr="span" attr2="VALUE2" attr3="VALUE3" /> */}
//     <State />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(<State />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
