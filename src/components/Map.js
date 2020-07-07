import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const buttonStyle = {
    "backgroundColor": "#FD7272",
    "width": "8em",
    "padding": "1%",
    "color": "#F8EFBA",
    "cursor": "pointer",
    "fontSize": 20,
    "fontFamily": "'Open Sans', sans-serif"
}


class Map extends React.Component {
    // constructor(props) {
    //     super(props);

    // }
    render() {
        return (
            <div id='mapSection'>
                <Link style={buttonStyle} to='/'>
                    <Button style={buttonStyle}>
                        <i className="fa fa-arrow-left" aria-hidden="true">    </i>Restart
                    </Button>
                </Link>
                <section id="map"></section>
            </div>
        );
    }
}

export default Map;