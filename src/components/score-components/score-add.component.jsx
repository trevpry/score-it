import React, { Component } from 'react';

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

    handleClick = (e) => {
        const value = this.props.componentParams.positive ? Number(e.target.value) : Number(e.target.value) * -1
        this.setState({sum: this.state.sum + value});
    }

    handleSubmit = e => {
        const score = this.props.componentParams.addScore === false ? null : Number(this.state.sum);
        const response = Number(this.state.sum)
        this.props.handleClick({score, response})
        this.setState({sum: 0})
    }

    render() {
        return (
            <div className='center'>
                <div>{this.props.componentParams.label}</div>
                <form>
                    <input type='text' value={this.state.sum} onChange={this.handleChange}/>
                </form>
                <button value='1' onClick={this.handleClick}>+1</button>
                <button value='5' onClick={this.handleClick}>+5</button>
                <button onClick={this.handleSubmit}>NEXT</button>
            </div>
        )
    }

}

export default ScoreAdd;