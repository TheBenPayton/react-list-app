import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import Content from "./components/content";
import Features from "./components/features";
import Container from "./components/container";
import Time from "./components/time";
import App from "./components/list";
import UI from "./components/container";

//Call your renders below here and make sure that they match the corresponding-
//-HTML ID name!!
ReactDOM.render(<Content />, document.getElementById('root'));
ReactDOM.render(<Features />, document.getElementById('secondary'));
ReactDOM.render(<Container />, document.getElementById('container'));
ReactDOM.render(<App />, document.getElementById('listApp'));
ReactDOM.render(<UI />, document.getElementById('UI'));
