import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'
import { Link } from "react-router-dom";

const linkStyle ={
    "fontSize": 14,
    "fontFamily": "'Open Sans', sans-serif",
    "color": "#FD7272",
    "margin": "0 auto",
    "cursor": "pointer"
}

class CreateUser extends Component {
    state = {
        open: false,
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
        msg: ''
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
        console.log(newState);
    }

    // handleSubmit(event) {
    //     event.preventDefault()
    //     var data = {
    //         firstname: this.state.firstname,
    //         lastname: this.state.lastname,
    //         username: this.state.username,
    //         password: this.state.password,
    //         email: this.state.email
    //     }
    //     console.log(data)
    //     fetch("/", {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(data)
    //     }).then(function(response) {
    //         if (response.status >= 400) {
    //           throw new Error("Bad response from server");
    //         }
    //         return response.json();
    //     }).then(function(data) {
    //         console.log(data)    
    //         if(data == "success"){
    //            this.setState({
    //                msg: "Thanks for signing up!",
    //                open: false
    //         });  
    //         }
    //     }).catch(function(err) {
    //         console.log(err)
    //     });
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        //payload.id = this.props.carTotal + 1
        delete payload.open
        this.setState({ open: false })
        console.log("THE USER", payload)
        // add function to save the payload to the db
        fetch("/createUser", {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify(payload)
        }).then((messages) => {console.log(messages)})
        // }).then(response => response.json();
        // })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({ ...this.state })
        }
    }

    render() {
        return (
            <Fragment style={linkStyle}>
                <div style={{ textAlign: 'center' }}>
                    <Link
                        variant="contained"
                        className="add-user"
                        onClick={this.toggleDialog}
                        style={linkStyle}
                    >
                        Don't have an account? Sign up now!
                    </Link>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Sign up for Middlewhere</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '400px' }}>
                                <TextField
                                    id="firstname" 
                                    placeholder="First Name" 
                                    value={this.state.firstname} 
                                    onChange={this.handleTextChange}
                                    style={{marginBottom: "3%", width: '80%'}}
                                    required />
                                <TextField
                                    id="lastname" 
                                    placeholder="Last Name" 
                                    value={this.state.lastname} 
                                    onChange={this.handleTextChange}
                                    style={{marginBottom: "3%", width: '80%'}}
                                    required />
                                <TextField
                                    id="username" 
                                    placeholder="Username" 
                                    value={this.state.username} 
                                    onChange={this.handleTextChange}
                                    style={{marginBottom: "3%", width: '80%'}}
                                    required />
                                <TextField 
                                    id="email"
                                    type="email"
                                    placeholder="Email" 
                                    value={this.state.email} 
                                    onChange={this.handleTextChange}
                                    style={{marginBottom: "3%", width: '80%'}}
                                    required />
                                <TextField 
                                    id="password" 
                                    placeholder="Password" 
                                    type="password"
                                    value={this.state.password} 
                                    onChange={this.handleTextChange}
                                    style={{marginBottom: "3%", width: '80%'}}
                                    required />
                                <br />
                                <Button variant="contained" style={{backgroundColor: '#FD7272', color: '#F8EFBA'}} type="submit">Create User</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default CreateUser