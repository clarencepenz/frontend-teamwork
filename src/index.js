import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
   
import App from './App';
import * as serviceWorker from './serviceWorker';
import JavascriptTimeAgo from 'javascript-time-ago'
 
// The desired locales.
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'
 
// Initialize the desired locales.
JavascriptTimeAgo.locale(en)
JavascriptTimeAgo.locale(ru)

ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
