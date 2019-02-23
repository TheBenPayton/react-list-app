import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import Content from "./components/content";
import Features from "./components/features";
import Container from "./components/container";
import Time from "./components/time";
import App from "./components/list";
import UI from "./components/container";
import Navbar from "./components/navbar";

ReactDOM.render(<Content />, document.getElementById('root'));
ReactDOM.render(<Features />, document.getElementById('secondary'));
ReactDOM.render(<Container />, document.getElementById('container'));
ReactDOM.render(<Time />, document.getElementById('time'));
ReactDOM.render(<App />, document.getElementById('listApp'));
ReactDOM.render(<UI />, document.getElementById('UI'));
ReactDOM.render(<Navbar />, document.getElementById('nav'));
