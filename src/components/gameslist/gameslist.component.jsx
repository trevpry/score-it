import React, { Component } from 'react';

import './gameslist.component.scss';
import { Link } from 'react-router-dom';

class GamesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [
                {
                    name: 'Blokus',
                    id: 1
                },
                {
                    name: 'Traders of Osaka',
                    id: 2
                },
                {
                    name: 'Brass: Lancashire',
                    id: 3
                }
            ]
        }
    }

    render() {
        return (
            <div className='games-list-container'>
                <div>
                    <h1>Games List</h1>
                </div>
                <div className='games-list'>
                    { this.state.games.map((game) => {
                        return <div className='games-list-item' key={game.id}>
                                <Link className='games-list-link'  to={`games/${game.id}`}>{game.name}</Link>
                            </div>
                        })
                    }
                </div>              
            </div>
        )
    }
        
    
}

export default GamesList;