import React from 'react';
import { TextField, Button,  Select } from '@material-ui/core';
import { Link } from "react-router-dom";
import LocationSearchInput from './SearchLocationInput';


const buttonStyle = {
    "backgroundColor": "#FD7272",
    "width": "12em",
    "padding": "3%",
    "margin": "0 auto",
    "color": "#F8EFBA",
    "cursor": "pointer",
    "fontSize": 20,
    "fontFamily": "'Open Sans', sans-serif",
    "borderRadius": 10
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addressOne: '',
            addressTwo: '',
            addressThree: '',
            category: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        //payload.id = this.props.carTotal + 1
        console.log("COORDS", payload)
        // add function to save the payload to the db
    }

    render() {
        return (
           <main>
                <form onSubmit={this.handleSubmit}>
                    <label style={{"marginBottom": "2em", "fontFamily": "'Open Sans', sans-serif"}}>Where should we search?</label>
                    <LocationSearchInput />
                    <LocationSearchInput />
                    <LocationSearchInput style={{"marginBottom": "3em"}} required/>
                    <label style={{"marginBottom": "2em", marginTop: "2em", "fontFamily": "'Open Sans', sans-serif"}}>What type of venue are you looking for?</label>
                    <Select
                        style={{"marginBottom": "3em"}}
                        native
                        inputProps={{
                            name: 'age',
                            id: 'filled-age-native-simple',
                        }}
                        required
                        >
                        <option aria-label="None" label="Please select a category..." selected disabled />
                        <option value={10}>Restaurant</option>
                        <option value={20}>Coffee</option>
                        <option value={30}>Bars</option>
                        {/* <option value={30}>Parks</option> */}
                    </Select>
                    <Link to='/map'><Button type='submit' style={buttonStyle} variant="contained">Find</Button></Link>
                </form>
            </main>
        )
    }
}

export default Home;