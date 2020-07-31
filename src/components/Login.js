import React, { useState } from 'react'
import { TextField, Button} from '@material-ui/core';
import { Link } from "react-router-dom";
import CreateUser from "./CreateUser";

const buttonStyle = {
    "backgroundColor": "#FD7272",
    "width": "10em",
    "padding": "1%",
    "margin": "0 auto",
    "marginTop": "4%",
    "marginBottom": '2%',
    "color": "#F8EFBA",
    "cursor": "pointer",
    "fontSize": 20,
    "fontFamily": "'Open Sans', sans-serif",
    "borderRadius": 10
}

const textFieldStyle = {
    "margin": "1.5em auto", 
    "width": "35%",
    "justifyConetent": "center",
}

const Login = (props) => {

    const handleLogin = (props) => {
        props.isLoggedIn = true;
        console.log("Logging in..." + props.isLoggedIn);
    }

    return(
        <main>
            <form onSubmit={props.onClick}>
                <TextField 
                    style={textFieldStyle}
                    type="text"
                    placeholder="Username"
                    required />
                <TextField
                    style={textFieldStyle}
                    type="password"
                    placeholder="Password"
                    required />
                <Link style={buttonStyle} to='/'><Button onClick={handleLogin} style={buttonStyle} type="submit">Login</Button></Link>
            </form>
            <CreateUser />
        </main>
    );
}

export default Login;
