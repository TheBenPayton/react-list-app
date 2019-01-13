//Contains MATERIAL-UI Navbar and its functions:
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

function link(){
    //This function is linked to the button to let dev know
    //Whenever the button below is successfully clicked.
    console.log('Clicked');
}

const NavBar = () => {
    return(
        <div className="navi">
            <AppBar style={{backgroundColor: '#3498DB'}} position="fixed" color="secondary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Listy, the greatest list building buddy
                    </Typography>
                    <a href="https://github.com/TheBenPayton" id='icons'><Icon onClick={ link() }>mood</Icon></a>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;