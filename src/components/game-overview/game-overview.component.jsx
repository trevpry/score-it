import React, { Component } from 'react';

import ScoreAdd from '../score-components/score-add.component'
import FinalScore from '../score-components/final-score.component'
import ScoreBoolean from '../score-components/score-boolean.component'
import ScoreMultiply from '../score-components/score-multiply.component'
import ScoreDivide from '../score-components/score-divide.component'

class GameOverview extends Component {
    constructor(props) {
        super(props);
        const id = props.match.params.gameId;
        
        this.state = {
            scoreClicked: false,
            button: {
                buttonState: 'init',
                buttonText: "SCORE IT!"
            },
            id,
            currentScoreComponent: 0,
            currentGame: {},
            currentScore: 0,
            lastResponse: '',
            games: [
                {
                    id: 1,
                    name: 'Blokus',
                    scoreComponents: [
                        {
                            component: ScoreAdd,
                            componentParams: {
                                positive: false,
                                addScore: true,
                                label: "Enter the number of squares you have in your remaining tiles."
                            }
                        },
                        {
                            component: ScoreBoolean,
                            componentParams: {
                                question: 'Is the last piece you placed on the board your smallest piece (1 square)?',
                                onTrue: 5,
                                onFalse: 0
                            }
                        },
                        {
                            component: ScoreBoolean,
                            componentParams: {
                                question: 'Did you place all of your tiles?',
                                onTrue: 15,
                                onFalse: 0
                            }
                        },
                        {
                            component: FinalScore,
                            type: 'final',
                            componentParams: {}
                        }
                    ]
                    
                },
                {
                    name: 'Traders of Osaka',
                    id: 2,
                    scoreComponents: [
                        {
                            component: ScoreAdd,
                            componentParams: {
                                positive: true,
                                addScore: false,
                                label: "Enter the number of cards in the set being sold plus the number of achievement tokens in that color."
                            }
                        },
                        {
                            component: ScoreMultiply,
                            componentParams: {
                                round: {
                                    direction: 'up',
                                    place: 5
                                },
                                value1: {
                                    type: 'input',
                                    label: 'Enter the value of the highest value card in the set being sold'
                                },
                                value2: {
                                    type: 'input',
                                    label: 'Value from the previous entry',
                                    value: 'previousScore'
                                }
                            }
                        },
                        {
                            component: FinalScore,
                            type: 'final',
                            componentParams: {
                                operation: 'divide',
                                operationValue: 5
                            }
                        }
                    ]
                },
                {
                    name: 'Brass: Lancashire',
                    id: 3,
                    scoreComponents: [
                        {
                            component: ScoreAdd,
                            componentParams: {
                                positive: true,
                                addScore: true,
                                label: "End of Canal Era: For each of your link tiles, add 1 for each connect icon in adjacent locations."
                            }
                        },
                        {
                            component: ScoreAdd,
                            componentParams: {
                                positive: true,
                                addScore: true,
                                label: "End of Canal Era: Add all points from your flipped tiles."
                            }
                        },
                        {
                            component: ScoreAdd,
                            componentParams: {
                                positive: true,
                                addScore: true,
                                label: "End of Game: For each of your link tiles, add 1 for each connect icon in adjacent locations."
                            }
                        },
                        {
                            component: ScoreAdd,
                            componentParams: {
                                positive: true,
                                addScore: true,
                                label: "End of Game: Add all points from your flipped tiles."
                            }
                        },{
                            component: ScoreDivide,
                            componentParams: {
                                positive: true,
                                addScore: true,
                                round: {
                                    direction: 'down',
                                    place: 1
                                },
                                value1: {
                                    type: 'input',
                                    label: "End of Game: Add all Pounds remaining."
                                },
                                value2: {
                                    type: 'fixed',
                                    label: '1 Point for every 10 Pounds',
                                    value: 10
                                }
                            }
                        },
                        {
                            component: FinalScore,
                            type: 'final',
                            componentParams: {}
                        }
                    ]
                }
            ]
        }
    }

    componentDidMount = () => {
        const newState = this.state;
        newState.currentGame = this.state.games.find(game => game.id == this.state.id);

        this.setState(newState);
    }

    handleClick = returned => {
        const newState = this.state;
        const currentComponent = newState.currentGame.scoreComponents[newState.currentScoreComponent];
        console.log(returned)   
        //newState.currentScore = returned.score === null ? 0 : newState.currentScore + returned.score;
        newState.currentScore = returned.score ? newState.currentScore + returned.score : newState.currentScore;
        newState.lastResponse = returned.response ? returned.response : this.state.lastResponse;

        if(newState.scoreClicked) {newState.currentScoreComponent++}   
        newState.scoreClicked = true;

        if (newState.currentScoreComponent === 0 && this.state.currentGame.scoreComponents.length > 1) {
            newState.button.buttonText = 'In Overview';
        } else if (currentComponent.type === 'final') {
            newState.button.buttonState = 'hide';
        }

        //console.log(newState)

        this.setState(newState);
    }

    setSum = sum => {
        console.log(sum)
    }

    render() {
        const game = this.state.games.find(game => game.id == this.state.id);
        const currentGame = this.state.currentGame.id ? this.state.currentGame : game;
        console.log(this.state.lastResponse)
        const ScoreComponent = currentGame.scoreComponents[this.state.currentScoreComponent].component;
        return (
            <div className='center'>
                <div>Game Overview</div>
                <div>{game.name} Current Score: {this.state.currentScore}</div>
                {this.state.scoreClicked && <ScoreComponent componentParams={currentGame.scoreComponents[this.state.currentScoreComponent].componentParams} score={this.state.currentScore} lastResponse={this.state.lastResponse} handleClick={this.handleClick}/>}
                {!this.state.scoreClicked && <button onClick={this.handleClick}>{this.state.button.buttonText}</button>}
            </div>
        )
    }
}

export default GameOverview