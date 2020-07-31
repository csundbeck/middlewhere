import React from 'react'
import { Link } from "react-router-dom";


class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            favorites: []
        }
    }

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(favorites => this.setState({favorites}))
            .then(favorites => console.log(favorites))
      }

    render() {
        return (
            <div id='favoritesSection'>
                <h2>Favorites</h2>
                <section id='favoritesList'>
                    <ul>{this.state.favorites.map((favorite, index) => 
                        <li className='favoriteItem' key={index}>
                            <p className='beer-name'>{favorite.name}</p>
                        </li>)}
                    </ul>
                </section>
            </div>
        )
    }
}

export default Favorites;