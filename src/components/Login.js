import React from 'react'
import { TextField, Button} from '@material-ui/core';

const buttonStyle = {
    "backgroundColor": "#FD7272",
    "width": "10em",
    "padding": "1%",
    "marginTop": "4%",
    "color": "#F8EFBA",
    "cursor": "pointer",
    "fontSize": 20,
    "fontFamily": "'Open Sans', sans-serif"
}

const textFieldStyle = {
    "margin": "1.5em auto", 
    "width": "70%",
    "justifyConetent": "center",
}

const Login = (props) => {

    return(
        <main>
            <form onSubmit={props.onClick}>
                <TextField style={textFieldStyle} type="text" placeholder="Username" />
                <TextField style={textFieldStyle} type="password" placeholder="Password"/>
                <Button type='submit' style={buttonStyle}>Login</Button>
            </form>
        </main>
    );
}

export default Login;