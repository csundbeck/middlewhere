import React from 'react'

class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            favorites: []
        }
    }

    // componentDidMount() {
    //     fetch('https://api.punkapi.com/v2/beers')
    //         .then(res => res.json())
    //         .then(favorites => this.setState({favorites}))
    //         .then(favorites => console.log(favorites))
    //   }

    render() {
        return (
            <div id='favoritesSection'>
                <h2>Favorites</h2>
                <section id='favoritesList'>
                    <ul>
                        <li className='favoriteItem'>
                            <h3>Giovanni's Table</h3>
                            <p>11701 Bee Cave Rd #105, Bee Cave, TX</p>
                            <p>(512) 386-1155</p>
                        </li>
                        <li className='favoriteItem'>
                            <h3>Copper Restaurant & Dessert Lounge</h3>
                            <p>401 Esperanza Crossing #104, Austin, TX</p>
                            <p>(512) 215-3633</p>
                        </li>
                        <li className='favoriteItem'>
                            <h3>Gloria's Latin Cuisine</h3>
                            <p>3309 Esperanza Crossing Suite #100, Austin</p>
                            <p>(512) 833-6400</p>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Favorites;