import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import $ from 'jquery';

const buttonStyle = {
    "backgroundColor": "#FD7272",
    "width": "8em",
    "padding": "1%",
    "color": "#F8EFBA",
    "cursor": "pointer",
    "fontSize": 18,
    "fontFamily": "'Open Sans', sans-serif"
}

// var array = [1, 2, 3];

// var pois = [];
var position1 = {lat: Number(sessionStorage.getItem('mw-lat1')), lng: Number(sessionStorage.getItem('mw-lng1'))}
var position2 = {lat: Number(sessionStorage.getItem('mw-lat2')), lng: Number(sessionStorage.getItem('mw-lng2'))}
var position3 = {lat: Number(sessionStorage.getItem('mw-lat3')), lng: Number(sessionStorage.getItem('mw-lng3'))}
// var category = sessionStorage.getItem('category');
var center = {
    lat: (position1.lat + position2.lat + position3.lat)/3,
    lng: (position1.lng + position2.lng + position3.lng)/3
}
var centerString = center.lat + ',' + center.lng;

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pointsOfInterest: [],
            loading: false
        }
    }
    // ${centerString}
    componentDidMount() {
        this.renderMap();
        this.setState({ loading: true })
        fetch('https://api.punkapi.com/v2/beers')
        //fetch(`http://www.mapquestapi.com/search/v2/radius?key=1DKzmIgGIdWLCAu8uLqBeH6IaLd7fTdH&radius=5&units=m&maxMatches=20&origin=30.266666,-97.733330`)
            .then(res => res.json())
            .then(pointsOfInterest => this.setState({ pointsOfInterest }))
    }

    renderMap = () => {
        loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBZYPWBtg6r7RRnaDC2WgyKQOmYxB55mg8&libraries=places&callback=initMap');
        window.initMap = this.initMap;
    }

    initMap = () => {
        // The map, centered at center
        var map = new window.google.maps.Map(
            document.getElementById('map'), {zoom: 10, center: center});
        // Map markers
        var marker1 = new window.google.maps.Marker({position: position1, map: map, title: 'Address 1', label: '1'});
        var marker2 = new window.google.maps.Marker({position: position2, map: map, title: 'Address 2', label: '2'});
        var marker3 = new window.google.maps.Marker({position: position3, map: map, title: 'Address 3', label: '3'});
        const centerIcon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
        var centerMarker = new window.google.maps.Marker({position: center, map: map, title: 'Center', icon: centerIcon});
    
        marker1.setMap(map);
        marker2.setMap(map);
        marker3.setMap(map);
        centerMarker.setMap(map);
    }

    render() {
        return (
            <div id='mapSection'>
                <section onLoad={this.reloadPage} id="map"></section>
                <section id="placesSection" onLoad={this.fetchPOIs}>
                    <h3 style={{textAlign: 'center',}}>What's in the middle?</h3>
                    <p>{console.log(this.state.pointsOfInterest.searchResults)}</p>
                    <ul>
                        {this.state.pointsOfInterest.map((poi, index) => 
                            <li className='poiItem' key={index}>
                            <div id='savePlaceContainer'>
                                <i id={`heart-${index}`} className="like-button far fa-heart" onClick={likePlace(index)} aria-hidden="true"></i>
                            </div>
                            <div id='placeDetails'>
                                <p>{poi.name}</p>
                                <p>{index}</p>
                            </div>
                        </li>
                        )}
                    </ul>
                    {/* <ul id='poiList'>{
                    this.state.loading ? (
                        <div>Loading...</div> 
                    ) : (
                        this.state.pointsOfInterest.searchResults.map((poi, index) =>
                            <li className='poiItem' key={index}>
                                <div id='savePlaceContainer'>
                                    <i className="like-button far fa-heart" aria-hidden="true"></i>
                                </div>
                                <div id='placeDetails'>
                                    <p>{poi.name}</p>
                                    <p>{poi.fields.address + ', ' + poi.fields.city + ', ' + poi.fields.state + ', ' + poi.fields.postal_code}</p>
                                    <p>{poi.fields.phone}</p>
                                </div>
                            </li>
                        )
                    )}</ul> */}
                </section>
            </div>
        );
    }
}

function loadScript(url) {
    var index = window.document.getElementsByTagName('script')[0];
    var script = window.document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
}

const likePlace = (i) => {
    console.log('clicked')
    console.log(document.getElementById(`heart-${i}`));
    // document.getElementById(`heart-0`).classList.toggle('liked');
}

export default Map;