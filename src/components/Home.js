import React from 'react';
import { TextField, Button,  Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

const buttonStyle = {
    "backgroundColor": "#FD7272",
    "width": "12em",
    "padding": "1.5%",
    "margin": "0 auto",
    "color": "#F8EFBA",
    "cursor": "pointer",
    "fontSize": 20,
    "fontFamily": "'Open Sans', sans-serif",
    "borderRadius": 10
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            address: '',
            category: '',
            position1: {
                lat: 0,
                lng: 0
            },
            position2: {
                lat: 0,
                lng: 0
            },
            position3: {
                lat: 0,
                lng: 0
            },
            addressOne: '',
            addressTwo: '',
            addressThree: '',
    }
}

  handleChangeOne = address => {
    this.setState({ addressOne: address });
  };

  handleChangeTwo = address => {
    this.setState({ addressTwo: address });
  };

  handleChangeThree = address => {
    this.setState({ addressThree: address });
  };
 
  handleSelectOne = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({
          position1: latLng
      }))
      .then(() => sessionStorage.setItem('mw-lat1', this.state.position1.lat))
      .then(() => sessionStorage.setItem('mw-lng1', this.state.position1.lng))
      .then(() => console.log('THIS IS POSITION 1: ', this.state.position1))
      .catch(error => console.error('Error', error));
  };

  handleSelectTwo = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({
          position2: latLng
      }))
      .then(() => sessionStorage.setItem('mw-lat2', this.state.position2.lat))
      .then(() => sessionStorage.setItem('mw-lng2', this.state.position2.lng))
      .then(() => console.log('THIS IS POSITION 2: ', this.state.position2))
      .catch(error => console.error('Error', error));
  };

  handleSelectThree = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({
          position3: latLng
      }))
      .then(() => sessionStorage.setItem('mw-lat3', this.state.position3.lat))
      .then(() => sessionStorage.setItem('mw-lng3', this.state.position3.lng))
      .then(() => console.log('THIS IS POSITION 3: ', this.state.position3))
      .catch(error => console.error('Error', error));
  };

  catHandleSelect = (e) => {
      this.setState({
          category: e.target.value
      })
      sessionStorage.setItem('category', this.state.category);
      console.log(this.state.category);
  } 

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.history.push('/map');
    }

    render() {
        return (
           <main>
                <form autocomplete='off' onSubmit={this.handleSubmit}>
                    <label style={{"marginBottom": "2em", "fontFamily": "'Open Sans', sans-serif"}}>Where should we search?</label>
                    <PlacesAutocomplete
                        className='places-autocomplete-input'
                        value={this.state.addressOne}
                        onChange={this.handleChangeOne}
                        onSelect={this.handleSelectOne}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <TextField
                                style={{width: "100%", marginTop: '1.5em'}}
                            {...getInputProps({
                                placeholder: 'Search Address ...',
                                className: 'location-search-input',
                            })}
                            required
                            />
                            <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                                );
                            })}
                            </div>
                        </div>
                        
                        )}
                    </PlacesAutocomplete>
                    <PlacesAutocomplete
                        className='places-autocomplete-input'
                        value={this.state.addressTwo}
                        onChange={this.handleChangeTwo}
                        onSelect={this.handleSelectTwo}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <TextField
                                style={{width: "100%", marginTop: '1.5em'}}
                            {...getInputProps({
                                placeholder: 'Search Address ...',
                                className: 'location-search-input',
                            })}
                            required
                            />
                            <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                                );
                            })}
                            </div>
                        </div>
                        
                        )}
                    </PlacesAutocomplete>
                    <PlacesAutocomplete
                        style={{"marginBottom": "3em"}}
                        className='places-autocomplete-input'
                        value={this.state.addressThree}
                        onChange={this.handleChangeThree}
                        onSelect={this.handleSelectThree}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <TextField
                                style={{width: "100%", marginTop: '1.5em'}}
                            {...getInputProps({
                                placeholder: 'Search Address ...',
                                className: 'location-search-input',
                            })}
                            required
                            />
                            <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                                );
                            })}
                            </div>
                        </div>
                        
                        )}
                    </PlacesAutocomplete>
                    <label style={{"marginBottom": "2em", marginTop: "2em", "fontFamily": "'Open Sans', sans-serif"}}>What type of venue are you looking for?</label>
                    <FormControl>
                    <InputLabel id="demo-simple-select-label">Select a Venue Type...</InputLabel>
                    <Select
                        style={{"marginBottom": "3em", 'padding': '1%'}}
                        onChange={this.catHandleSelect}
                        required
                        >
                        <MenuItem value={"restaurant"}>Restaurant</MenuItem>
                        <MenuItem value={"coffee"}>Coffee</MenuItem>
                        <MenuItem value={"bars"}>Bars</MenuItem>
                    </Select>
                    </FormControl>
                    <Button to='/map' type='submit' style={buttonStyle} variant="contained">Find</Button>
                </form>
            </main>
            );
        }
    }

export default Home;