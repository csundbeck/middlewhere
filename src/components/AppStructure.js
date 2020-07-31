import React from 'react';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";

const menuStyle = {
    "backgroundColor": "#FD7272",
    "color": "#F8EFBA"
}

const appBarStyle = {
  "backgroundColor": "#FD7272",
  "color": "#F8EFBA",
  "marginBottom": "4em"
}

const buttonGroup = {
  "display": "flex",
  "flexDirection": "row",
  "justiftContent": "flexEnd",
  "alignContent": "flexEnd",
  "width": "inherit",
  "marginLeft": "34em",
}

const AppStructure = (props) => {

  const handleLogout = (props) => {
    props.isLoggedIn = false;
    console.log("Logging out...")
    console.log(props.isLoggedIn)
  }

  const clearStorage = () => {
    if (sessionStorage.getItem("mw-addrone") === undefined) {
      sessionStorage.setItem("mw-addrone", "null");
    } else {
      sessionStorage.setItem('mw-addrone', null)
    }
    if (sessionStorage.getItem("mw-addrtwo") === undefined) {
      sessionStorage.setItem("mw-addrtwo", "null");
    } else {
      sessionStorage.setItem('mw-addrtwo', null)
    }if (sessionStorage.getItem("mw-addrthree") === undefined) {
      sessionStorage.setItem("mw-addrthree", "null");
    } else {
      sessionStorage.setItem('mw-addrthree', null)
    }
  }

        return (
          <main>
            <AppBar position="static" style={appBarStyle}>
              <Toolbar>
                  <IconButton edge="start" color="inherit" aria-label="menu">
                      <Typography variant="h3" style={{"fontFamily": "'Leckerli One', cursive"}}><Link onClick={clearStorage()} style={menuStyle} to='/'>Middlewhere</Link></Typography>
                  </IconButton>
                  <div style={buttonGroup}>
                  <Link to="/favorites" style={menuStyle}><Button color="inherit" disabled={props.isLoggedIn ? true : false} onClick={null}>{props.isLoggedIn ?  '' : 'Favorites'}</Button></Link>
                  {/* <Link to='/account' style={menuStyle}><Button color="inherit" disabled={props.isLoggedIn ? true : false}>{props.isLoggedIn ?  '' : 'Account'}</Button></Link> */}
                  <Link to='/login' style={menuStyle}><Button onClick={handleLogout} color="inherit" disabled={props.isLoggedIn ? true: false}>{props.isLoggedIn ? '' : 'Logout'}</Button></Link>
                  </div>
              </Toolbar>
            </AppBar>
          </main>
        );
}

export default AppStructure;
