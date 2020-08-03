import React from 'react';
import './App.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import AppStructure from './components/AppStructure';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    return (
      <BrowserRouter>
        <AppStructure isLoggedIn={this.state.isLoggedIn} handleLogout={this.state.handeLogout}/>
        <Router isLoggedIn={this.state.isLoggedIn} handleLogin={this.state.handleLogin}/>
      </BrowserRouter>
    );
  }
}

export default App;