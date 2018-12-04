/*This component is the main content of app
as in the body styling and what not!
*/
import React, { Component } from 'react';

//Functions go below here:


function working(){
    console.log("Worked!");
}


//JSX Code/component that gets rendered and exported:
class Content extends Component {
    render() { 
        return ( 
            <div className="UIbox">
                <button className="launchButton" onClick={ working() }>Launch!🚀</button>
                <div className="UIbox2">
                    <ul>Instructions:
                        <li>Create your own lists!</li>
                        <li>Set goals and objectives!</li>
                        <li>Just select what you want to do!</li>
                        <li>Hover over this box to begin!</li>
                    </ul>
                </div>
                <form>
                    <label>
                    Name:
                    <input type="text" name="input1" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
 
export default Content;