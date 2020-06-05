import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

const menuStyle = {
    "backgroundColor": "#FD7272",
    "marginBottom": "4em",
    "color": "#F8EFBA"
}

const buttonGroup = {
  "display": "flex",
  "flexDirection": "row",
  "justiftContent": "flexEnd",
  "alignContent": "flexEnd",
  "width": "inherit",
  "marginLeft": "34em",
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    return (
      <main>
        <AppBar position="static" style={menuStyle}>
          <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                  <Typography variant="h3" style={{"fontFamily": "'Leckerli One', cursive"}}>Middlewhere</Typography>
              </IconButton>
              <div style={buttonGroup}>
                <Button color="inherit" disabled={!this.state.isLoggedIn}>{this.state.isLoggedIn ? 'Favorites' : ''}</Button>
                <Button color="inherit" disabled={!this.state.isLoggedIn}>{this.state.isLoggedIn ? 'Account' : ''}</Button>
                <Button onClick={this.handleLogout} color="inherit" disabled={!this.state.isLoggedIn}>{!this.state.isLoggedIn ? '' : 'Logout'}</Button>
              </div>
          </Toolbar>
        </AppBar>
        {!this.state.isLoggedIn ? <Login onClick={this.handleLogin} /> : <Home />}
      </main>
    );
  }
}

export default App;
