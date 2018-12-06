import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import Content from "./components/content";
import Features from "./components/features";


//Call you renders below here and make sure that they match the corresponding-
//HTML ID name!!
ReactDOM.render(<Content />, document.getElementById('root'));
ReactDOM.render(<Features />, document.getElementById('secondary'));
