//Contains MATERIAL-UI Navbar and its functions:
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const NavBar = () => {
    return(
        <div className="navi">
            <AppBar position="fixed" color="secondary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Listy,the greatest list building buddy.
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;