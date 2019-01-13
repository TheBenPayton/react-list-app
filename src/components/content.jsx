/*This component is the main content of app
as in the body styling and what not!
*/
import React, { Component } from 'react';
//Functions go below here:
function time() {

    console.log('rendering the time partition.');
}

//JSX Code/component that gets rendered and exported:
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        
    }
    render() { 
        return ( 
            <div className="UIbox">
                <div className="UIbox2">
                    <ul>Instructions:
                        <li>Create your own lists!</li>
                        <li>Set goals and objectives!</li>
                        <li>Just select what you want to do!</li>
                        <li>Place your memos or reminders in the input boxes!</li>
                        <li>Refresh the page to start a new list!</li>
                        <li>Time is: </li>
                    </ul>
                </div> 
                <div className="UIbox3">
                    <ul>More Info/Featues:
                        <li>This app is still in developmental stages.</li>
                        <li>Hope you enjoy this web app!</li>
                        <li>Have a request? Email me at: plong945@gmail.com</li>
                        <li>In the future I plan to add timed lists/alarms, as well as make it able to
                            send your own lists via Email!</li>
                    </ul>
                </div> 
                <div id="listApp"></div>
            </div>
        );
    }
}
 
export default Content;