import React, { Component } from 'react';


class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    runTime() {
        console.log('start');
        var userObj = [{
            name: null,
            age: null,
            email: null
         }
        ];
        console.log('Entities that exist currently: ' + userObj.name + ' ' + userObj.email);
        userObj.name = prompt("Please enter your name!");
        userObj.email = prompt("Please enter your email!");
        console.log("Entitiy added: " + userObj.name + " " + userObj.email);
    }
    render() { 
        return (  
            <div className="mega">
                <h1 className="wtext">Welcome To Listy!</h1>
                <button onClick= { this.runTime } className="signIn">Sign In</button>
            </div>
        );
    }
}
 
export default Features;