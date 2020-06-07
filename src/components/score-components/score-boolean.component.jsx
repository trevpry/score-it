import React, { Component } from 'react';

class ScoreBoolean extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sum: 0
        }
            
    }

    handleSubmit = e => {
        console.log(Number(e.target.value))
        this.props.handleClick({score: Number(e.target.value)})
        
        this.setState({sum: 0})
    }

    render() {
        return (
            <div className='center'>
                <div>
                    {this.props.componentParams.question}
                    
                </div>
                <button value={this.props.componentParams.onTrue} onClick={this.handleSubmit}>Yes</button>
                <button value={this.props.componentParams.onFalse} onClick={this.handleSubmit}>No</button>
            </div>
        )
    }

}

export default ScoreBoolean;