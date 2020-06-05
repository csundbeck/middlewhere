import React from 'react';
import { TextField, Button,  Select } from '@material-ui/core';
import PlacesAutocomplete from 'react-places-autocomplete';


const buttonStyle = {
    "backgroundColor": "#FD7272",
    "width": "15em",
    "padding": "3%",
    "marginTop": "4%",
    "color": "#F8EFBA",
    "cursor": "pointer",
    "fontSize": 20,
    "fontFamily": "'Open Sans', sans-serif"
}

const textFieldStyle = {
    "marginBottom": "1em"
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

    render() {
        return (
           <main>
                <form>
                    <label style={{"marginBottom": "2em", "fontFamily": "'Open Sans', sans-serif"}}>Where should we search?</label>
                    <TextField style={textFieldStyle}/>
                    <TextField style={textFieldStyle}/>
                    <TextField style={{"marginBottom": "3em"}}/>
                    <label style={{"marginBottom": "2em", "fontFamily": "'Open Sans', sans-serif"}}>What type of place are you looking for?</label>
                    <Select
                        style={{"marginBottom": "3em"}}
                        native
                        inputProps={{
                            name: 'age',
                            id: 'filled-age-native-simple',
                        }}
                        >
                        <option aria-label="None" label="Please select a category..." selected disabled />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                    <Button type="submit" style={buttonStyle} variant="contained">Find</Button>
                </form>
            </main>
        )
    }
}

export default Home;