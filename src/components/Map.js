import React from 'react';

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
var centerString = toString(center.lat + ',' + center.lng);

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
        // console.log(this.state.loading);
        // console.log('inside compaonentDidMount')
        // if (this.state.loading === false) {
        // this.setState((prevState) =>  {
        //     console.log(!prevState.loading);
        //     return { loading: !prevState.loading }
        // })};
        // console.log(this.state.loading);
        // // fetch('https://api.punkapi.com/v2/beers')
        // fetch(`https://www.mapquestapi.com/search/v2/radius?key=1DKzmIgGIdWLCAu8uLqBeH6IaLd7fTdH&radius=5&units=m&maxMatches=20&origin=30.266666,-97.733330`)
        //     .then(res => res.json())
        //     .then(pointsOfInterest => this.setState({ pointsOfInterest }));
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
                    <ul>
                        <li className='poiItem'>
                            <div id='savePlaceContainer'>
                            <i id='heart1' className="like-button far fa-heart" aria-hidden="true">{document.querySelector('#heart1')}</i>
                            </div>
                            <div id='placeDetails'>
                                <p>Giovanni's Table</p>
                                <p>11701 Bee Cave Rd #105, Bee Cave, TX</p>
                                <p>(512) 386-1155</p>
                            </div>
                        </li>
                        <li className='poiItem'>
                            <div id='savePlaceContainer'>
                                <i className="like-button far fa-heart" aria-hidden="true"></i>
                            </div>
                            <div id='placeDetails'>
                                <p>The Oasis On Lake Travis</p>
                                <p>6550 Comanche Trail, Austin, TX</p>
                                <p>(512) 266-2442</p>
                            </div>
                        </li>
                        <li className='poiItem'>
                            <div id='savePlaceContainer'>
                                <i id='heart3' className="like-button far fa-heart" aria-hidden="true"></i>
                            </div>
                            <div id='placeDetails'>
                                <p>Copper Restaurant & Dessert Lounge</p>
                                <p>401 Esperanza Crossing #104, Austin, TX</p>
                                <p>(512) 215-3633</p>
                            </div>
                        </li>
                        <li className='poiItem'>
                            <div id='savePlaceContainer'>
                                <i className="like-button far fa-heart" aria-hidden="true"></i>
                            </div>
                            <div id='placeDetails'>
                                <p>CRÚ Food & Wine Bar - The Domain</p>
                                <p>11410 Century Oaks Terrace #104, Austin, TX</p>
                                <p>(512) 339-9463</p>
                            </div>
                        </li>
                        <li className='poiItem'>
                            <div id='savePlaceContainer'>
                                <i id='heart5' className="like-button far fa-heart" aria-hidden="true"></i>
                            </div>
                            <div id='placeDetails'>
                                <p>Gloria's Latin Cuisine</p>
                                <p>3309 Esperanza Crossing Suite #100, Austin</p>
                                <p>(512) 833-6400</p>
                            </div>
                        </li>
                        <li className='poiItem'>
                            <div id='savePlaceContainer'>
                                <i className="like-button far fa-heart" aria-hidden="true"></i>
                            </div>
                            <div id='placeDetails'>
                                <p>Thai Cuisine</p>
                                <p>Silver Creek Center, 4101 W Parmer Ln F, Austin, TX</p>
                                <p>(512) 835-7888</p>
                            </div>
                        </li>
                        <li className='poiItem'>
                            <div id='savePlaceContainer'>
                                <i className="like-button far fa-heart" aria-hidden="true"></i>
                            </div>
                            <div id='placeDetails'>
                                <p>Freddy's Frozen Custard & Steakburgers</p>
                                <p>2602 W Pecan St, Pflugerville, TX</p>
                                <p>(512) 251-9332</p>
                            </div>
                        </li>
                        <li className='poiItem'>
                            <div id='savePlaceContainer'>
                                <i className="like-button far fa-heart" aria-hidden="true"></i>
                            </div>
                            <div id='placeDetails'>
                                <p>Shake Shack</p>
                                <p>11228 Domain Dr, Austin, TX</p>
                                <p>(512) 717-0422</p>
                            </div>
                        </li>
                        <li className='poiItem'>
                            <div id='savePlaceContainer'>
                                <i className="like-button far fa-heart" aria-hidden="true"></i>
                            </div>
                            <div id='placeDetails'>
                                <p>New Fortune Chinese Seafood Restaurant</p>
                                <p>10901 N Lamar Blvd, Austin, TX</p>
                                <p>(512) 832-9992</p>
                            </div>
                        </li>
                        <li className='poiItem'>
                            <div id='savePlaceContainer'>
                                <i className="like-button far fa-heart" aria-hidden="true"></i>
                            </div>
                            <div id='placeDetails'>
                                <p>Chez Zee American Bistro</p>
                                <p>5406 Balcones Dr, Austin, TX</p>
                                <p>(512) 454-2666</p>
                            </div>
                        </li>
                    </ul>
                    {/* <ul>
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
                    </ul> */}
                    {/* <ul id='poiList'>{
                    this.state.loading ? (
                        <div>Loading...</div> 
                    ) : (
                        this.state.pointsOfInterest.searchResults !== undefined && this.state.pointsOfInterest.searchResults.map((poi, index) =>
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
                <p>{console.log(document.getElementById('heart1'))
}</p>
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
        // document.getElementById('heart1').addEventListener('click', function() {
        //     document.getElementById(`heart1`).classList.toggle('liked');
        // });

export default Map;