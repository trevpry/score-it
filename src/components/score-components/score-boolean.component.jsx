import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class ScoreBoolean extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sum: 0
        }
            
    }

    handleSubmit = value => {
        console.log(value)
        this.props.handleClick({score: value})
        
        this.setState({sum: 0})
    }

    render() {
        return (
            <div className='center'>
                <div>
                    {this.props.componentParams.question}
                    
                </div>
                <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
                    <Button value={this.props.componentParams.onTrue} onClick={() => {this.handleSubmit(this.props.componentParams.onTrue)}}>Yes</Button>
                    <Button value={this.props.componentParams.onFalse} onClick={() => {this.handleSubmit(this.props.componentParams.onFalse)}}>No</Button>
                </ButtonGroup>

            </div>
        )
    }

}

export default ScoreBoolean;