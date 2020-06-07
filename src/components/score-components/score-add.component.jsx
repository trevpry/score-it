import React, { Component } from 'react';

import './score-components.styles.scss';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

class ScoreAdd extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sum: 0
        }
            
    }

    handleChange = e => {
        const sum = Number(e.target.value);
        this.setState({sum})
    }

    handleClick = (number) => {
        //const value = this.props.componentParams.positive ? number : number * -1
        this.setState({sum: this.state.sum + number});
    }

    handleSubmit = e => {
        const value = this.props.componentParams.positive ? Number(this.state.sum) : Number(this.state.sum) * -1
        const score = this.props.componentParams.addScore === false ? null : value;
        const response = value
        this.props.handleClick({score, response})
        this.setState({sum: 0})
    }

    render() {
        return (
            <div className='center'>
                <div className='score-component-text'>{this.props.componentParams.label}</div>
                <form>
                    <TextField id="standard-basic" className='numberInput' value={this.state.sum} onChange={this.handleChange}/>
                </form>

                <div className='calculator' >
                <ButtonGroup variant='contained' color="default" aria-label="outlined primary button group">
                    <Button value='1' onClick={() => {this.handleClick(1)}}>+1</Button>
                    <Button value='5' onClick={() => {this.handleClick(5)}}>+5</Button>
                </ButtonGroup>
                </div>

                <div className='buttonNext' >
                    <Button size='large' variant="contained" color="primary" onClick={this.handleSubmit}>NEXT</Button>
                </div>
            </div>
        )
    }

}

export default ScoreAdd;