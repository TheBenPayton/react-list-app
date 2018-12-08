/*This component is the main content of app
as in the body styling and what not!
*/
import React, { Component } from 'react';

//Functions go below here:

const test = () => { console.log('test!')};
var a = 0;

//JSX Code/component that gets rendered and exported:
class Content extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {  }
    }
    handleClick(){
        console.log("Clicked!");
        var result = a + 1;
        console.log(result);
    }
    render() { 
        return ( 
            <div className="UIbox">
                <button className="launchButton" onClick={ this.handleClick }>Send my list!🚀</button>
                <div className="UIbox2">
                    <ul>Instructions:
                        <li>Create your own lists!</li>
                        <li>Set goals and objectives!</li>
                        <li>Just select what you want to do!</li>
                        <li>Place your memos or reminders in the input boxes!</li>
                    </ul>
                </div> 
                <div id="listApp"></div>
            </div>
        );
    }
}
 
export default Content;