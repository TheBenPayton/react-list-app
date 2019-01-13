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
            email: null,
            answer: null
         }
        ];
        console.log('Entities that exist currently: ' + userObj.name + ' ' + userObj.email);
        userObj.name = prompt("Please enter your name!");
        userObj.answer = prompt("Would you like to submit email? (yes/no)");
        if(userObj.answer == 'yes'){
            userObj.email = prompt("Please enter your email!");
        } else {
            console.log('User opted out of email.');
        }
        console.log("Entitiy added: " + userObj.name + " " + userObj.email);
        //Linking global variables to react prop functions:
        document.getElementById("insert").innerHTML = userObj.name;
        document.getElementById("userName").innerHTML = userObj.name;
    }
    render() { 
        return (  
            <div className="mega">
                <h1 className="wtext">Welcome To Listy!</h1>
                <p className="paragraph">Logged in as:</p><p id="insert"></p>
                <button onClick= { this.runTime } className="signIn">Sign In</button>
            </div>
        );
    }
}
 
export default Features;