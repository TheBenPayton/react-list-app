import React, { Component } from 'react';
//This is just a simple timer component:
class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div className="footer">
            <p>Created by Payton Long, Made with React.js<br></br>Time on app: {this.state.seconds}</p>
        </div>
      );
    }
}

export default Timer;