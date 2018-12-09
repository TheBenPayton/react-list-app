import { Button, Alert, Spinner } from 'elemental';
import React, { Component } from 'react';

class UI extends Component {
    state = {  }
    render() { 
        return ( 
            <Alert type="success"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>
            <Button type="primary"><Spinner type="inverted" />Submitting</Button>
         );
    }
}
 
export default UI;