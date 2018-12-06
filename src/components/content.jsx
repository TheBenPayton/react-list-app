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
                <button className="launchButton" onClick={ this.handleClick }>Launch!🚀</button>
                <div className="UIbox2">
                    <ul>Instructions:
                        <li>Create your own lists!</li>
                        <li>Set goals and objectives!</li>
                        <li>Just select what you want to do!</li>
                        <li>Place your memos or reminders in the boxes!</li>
                    </ul>
                </div>
                <form className="listItem">
                    <label>
                    Item 1:
                    <input type="text" name="input1" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form className="listItem">
                <label>
                    Item 2:
                    <input type="text" name="input1" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form className="listItem">
                <label>
                    Item 3:
                    <input type="text" name="input1" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form className="listItem">
                <label>
                    Item 4:
                    <input type="text" name="input1" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
 
export default Content;