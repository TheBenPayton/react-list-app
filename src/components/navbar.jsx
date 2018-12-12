//Contains MATERIAL-UI Navbar and its functions:
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

function link(){
    console.log('Clicked');
}
const NavBar = () => {
    return(
        <div className="navi">
            <AppBar style={{backgroundColor: 'indianred'}} position="fixed" color="secondary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Listy, the greatest list building buddy
                    </Typography>
                    <Icon id='icons' onClick={ link() }>mood</Icon>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;