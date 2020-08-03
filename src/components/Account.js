import React from 'react'
import { Button } from '@material-ui/core';

const buttonStyle = {
    "backgroundColor": "#FD7272",
    "width": "12em",
    "padding": "0.5%",
    "margin": "0 auto",
    "marginTop": "4%", 
    "color": "#F8EFBA",
    "cursor": "pointer",
    "fontSize": 16,
    "fontFamily": "'Open Sans', sans-serif",
    "borderRadius": 10
}

class Account extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='accountSection'>
                <h2>Username</h2>
                <p>Email</p>
                <Button style={buttonStyle}>Change Password</Button>
            </div>
        )
    }
}

export default Account;